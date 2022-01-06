import './styles.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import { getUserInfo } from 'app/services/UserService';
import { Grid, Paper } from '@material-ui/core';
import { Likes } from '../Likes';
import Comments from '../Comments/Comments';
import AddComment from '../AddComment/AddComment';
export default function Post(props) {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');

  const userFriends = async (userId: number) => {
    const newFriends = await getUserInfo(userId);
    setFirstName(newFriends.firstName);
    setLastName(newFriends.lastName);
    console.log(props.post.id + 'post id je taj i taj');
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
                <Likes postId={props.post.id} />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </nav>
      <AddComment postId={props.post.id} />

      <Comments postId={props.post.id} />
    </div>
  );
}
