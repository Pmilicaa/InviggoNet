import {
  addLike,
  getAllLikes,
  getAllUserLikes,
} from 'app/services/LikeService';
import { useEffect, useState } from 'react';
import { Like } from '../Like';

export function Likes(props) {
  const [likes, setLikes] = useState([]);
  const [userLikes, setUserLikes] = useState([]);
  useEffect(() => {
    const lajkovi = getLikes();
    lajkovi.then(like => setLikes(like));
    const userLikess = getUserLikes();
    userLikess.then(lajk => setUserLikes(lajk));
  }, [setLikes]);
  const getLikes = async () => {
    const allLikes = await getAllLikes(props.postId);
    return allLikes;
  };
  const getUserLikes = async () => {
    const allLikes = await getAllUserLikes(props.postId, 1);
    return allLikes;
  };
  // console.log(likes);
  // console.log(userLikes);
  return (
    <div>
      <Like postId={props.postId} allLikes={likes} userLikes={userLikes} />
    </div>
  );
}
