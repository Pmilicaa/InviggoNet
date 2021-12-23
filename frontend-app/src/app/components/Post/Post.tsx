import './styles.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { getUserInfo } from 'app/services/UserService';
import { Divider, Avatar, Grid, Paper } from '@material-ui/core';
import { Likes } from '../Likes';

export default function Post(props) {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');

  const userFriends = async (userId: number) => {
    const newFriends = await getUserInfo(userId);
    setFirstName(newFriends.firstName);
    setLastName(newFriends.lastName);
  };
  React.useEffect(() => {
    userFriends(props.post.userId);
  }, []);

  return (
    <div className="cart">
      <nav aria-label="secondary mailbox folders">
        <Box
          sx={{
            bgcolor: 'background.paper',
            alignSelf: 'flex-end',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Paper style={{ padding: '40px 20px' }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs zeroMinWidth>
                <h4 style={{ margin: 0, textAlign: 'left' }}>
                  {firstName + ' ' + lastName}
                </h4>
                <p style={{ textAlign: 'left' }}>{props.post.content}</p>
                <p style={{ textAlign: 'left', color: 'gray' }}>
                  posted {new Date(props.post.createdAt).toLocaleDateString()}
                </p>
                <Likes />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </nav>
    </div>
  );
}
