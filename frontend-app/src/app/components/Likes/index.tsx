import {
  addLike,
  getAllLikes,
  getAllUserLikes,
} from 'app/services/LikeService';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { Like } from '../Like';
import { Like as like } from 'types/models/Like';
export function Likes(props) {
  const [likes, setLikes] = useState([]) as any;
  const [userLikes, setUserLikes] = useState([]) as any;
  useEffect(() => {
    const lajkovi = getLikes();
    lajkovi.then(like => setLikes(like));
    const userLikess = getUserLikes();
    userLikess.then(lajk => setUserLikes(lajk));
  }, []);
  const getLikes = async () => {
    const allLikes = await getAllLikes(props.postId);
    return allLikes;
  };
  const getUserLikes = async () => {
    const allLikes = await getAllUserLikes(props.postId, 1);
    return allLikes;
  };

  return (
    <div>
      <Like postId={props.postId} allLikes={likes} userLikes={userLikes} />
    </div>
  );
}
