import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { getPosts } from '../../services/PostService';
import AddPost from '../AddPost/AddPost';
import Posts from '../Posts/Posts';
import { Avatar } from '@mui/material';

export function Profile({ user, myProfile }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (user.username) {
      const userPost = userPosts(user.username);
      userPost.then(post => setPosts(post));
    }
    return () => {
      setPosts([]);
    };
  }, []);

  const userPosts = async (username: string) => {
    const userPosts = await getPosts(username);
    return userPosts;
  };

  // useEffect(() => {
  //   const username = 'dusanstoajn0';

  //   const newUser = ulogovani(username);
  //   newUser.then(user => setUser(user));
  // }, []);

  const getAllPosts = async () => {
    const get = await getPosts(user.username);
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

  return (
    <div>
      <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item>
            {user?.image ? (
              <Avatar
                alt=""
                src={user?.image + ''}
                sx={{ width: 100, height: 100 }}
              />
            ) : (
              <Avatar sx={{ width: 100, height: 100 }} />
            )}
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
      {myProfile ? <AddPost /> : <></>}
      <Posts posts={posts} />
    </div>
  );
}
