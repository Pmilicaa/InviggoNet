import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import { getMe } from '../../services/UserService';
import { useEffect, useState } from 'react';
import Post from '../Post/Post';
import { getPosts } from '../../services/PostService';
import AddPost from '../AddPost/AddPost';
import Posts from '../Posts/Posts';

export function Profile() {
  const [user, setUser] = useState({
    id: 0,
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    gender: '',
  });
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const username = 'dusanstoajn0';
    const userPost = userPosts(username);
    userPost.then(post => setPosts(post));
  }, []);
  const userPosts = async (username: string) => {
    const userPosts = await getPosts(username);
    return userPosts;
  };

  useEffect(() => {
    const username = 'dusanstoajn0';

    const newUser = ulogovani(username);
    newUser.then(user => setUser(user));
  }, []);
  const getAllPosts = async () => {
    const username = 'dusanstoajn0';

    const get = await getPosts(username);
    return get;
  };
  getAllPosts();
  const imgSrc = 'https://picsum.photos/200/300?random=2';

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  const ulogovani = async (username: string) => {
    let loggedInUser = await getMe();
    return loggedInUser;
  };

  return (
    <div>
      <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src={imgSrc} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  First name: {user.firstName}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Last name: {user.lastName}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Email: {user.email}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Age: {user.age}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Gender: {user.gender}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <AddPost />
      <Posts posts={posts} />
    </div>
  );
}
