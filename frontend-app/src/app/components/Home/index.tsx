import { getFriendsPosts } from 'app/services/PostService';
import { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';
import { io } from 'socket.io-client';
import { Post } from '../../../types/models/Post';

export function Home() {
  const [posts, setPosts]: any = useState([]);
  useEffect(() => {
    const userId = 1;
    const friendsPosts = getFriendsPosts(userId);
    friendsPosts.then(post => setPosts(post));
  }, []);

  useEffect(() => {
    const socket = io('ws://localhost:5000');

    socket.on('connnection', () => {
      console.log('connected to server');
    });

    socket.on('post-added', (newPost: Post) => {
      console.log(newPost);
      setPosts(posts => [...posts, newPost]);
    });

    socket.on('message', message => {
      console.log(message);
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnecting');
    });
  }, []);

  return (
    <>
      <Posts posts={posts} />
    </>
  );
}
