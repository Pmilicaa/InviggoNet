import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import PublicIcon from '@mui/icons-material/Public';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from "../../pages/LoginPage/slice/selectors";
import { useCurrentUserSlice } from "../../pages/LoginPage/slice";

export function Header() {
  const [search, setSearch] = useState('');

  const { actions } = useCurrentUserSlice();

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const history = useHistory();

  const handleSearch = () => {
    if (!search) return;
    setSearch('');
    history.push({
      pathname: '/search/' + search,
    });
  };

  const handleEnter = e => {
    if (e.code === 'Enter') {
      handleSearch();
    }
  };

  const handleNavigate = (route: string) => {
    return () => {
      history.push({
        pathname: route,
      });
    };
  };

  const handleLogout = () => {
    dispatch(actions.logout(undefined));
    history.push({
      pathname: '/login'
    })
  }

  return (
    <Box sx={{ height: '50px', flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: 'red' }}>
        <Toolbar sx={{ alignContent: 'center' }}>
          <Typography
            onClick={handleNavigate('/')}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            InviggoNet
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <IconButton onClick={handleSearch}>
              <SearchIcon style={{ fill: 'white' }} />
            </IconButton>
            <TextField
              id="outlined-search"
              type="search"
              variant="filled"
              inputProps={{
                style: { backgroundColor: 'white' },
              }}
              size="small"
              value={search}
              onChange={e => {
                setSearch(e.target.value);
              }}
              onKeyPress={handleEnter}
            />
          </Box>
          {
            user?.id === -1 ?
              <>
                <Button color="inherit" onClick={handleNavigate('/register')}>
                  Register
                </Button>
                <Button color="inherit" onClick={handleNavigate('/login')}>
                  Login
                </Button>
              </>
              :
              <>
                <IconButton onClick={handleNavigate('/requests')}>
                  <PublicIcon style={{ fill: 'white' }} />
                </IconButton>
                <IconButton>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/2.jpg"
                    onClick={handleNavigate('/profile')}
                  />
                </IconButton>
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              </>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
