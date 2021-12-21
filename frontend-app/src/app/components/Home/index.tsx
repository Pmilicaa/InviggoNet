import { getFriendsPosts } from 'app/services/PostService';
import { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';

export function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const userId = 1;
    const friendsPosts = getFriendsPosts(userId);
    friendsPosts.then(post => setPosts(post));
  }, []);

  return (
    <>
      <Posts posts={posts} />
    </>
  );
}
