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
import { useHistory } from 'react-router-dom';

export function Header() {
  const [search, setSearch] = useState('');

  const history = useHistory();

  const handleSearch = () => {
    setSearch('');
    history.push({
      pathname: '/search',
      search: '?' + search,
    });
  };

  const handleHome = () => {
    history.push({
      pathname: '/',
    });
  };
  const handleProfile = () => {
    history.push({
      pathname: '/profile',
    });
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: 'red' }}>
        <Toolbar>
          <Typography
            onClick={handleHome}
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
              label="Search friend"
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
            />
          </Box>
          <IconButton>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/2.jpg"
              onClick={handleProfile}
            />
          </IconButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
