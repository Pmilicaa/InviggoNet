import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { addLike, getAllLikes, unlikePost } from 'app/services/LikeService';
export function Like(props) {
  const [numberOflikes, setNumberOfLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    provjeraUsera();
    setNumberOfLikes(props.allLikes.length);
  }, [props.userLikes]);
  function provjeraUsera() {
    let userLiked = false;
    for (let index = 0; index < props.userLikes.length; index++) {
      if (props.postId === props.userLikes[index].postId) {
        userLiked = true;
      }
    }
    if (userLiked) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }
  const handleClick = () => {
    if (liked) {
      setLiked(false);
      setNumberOfLikes(props.allLikes.length - 1);
      const userId = 1;
      deleteLike(props.postId, userId);
    } else {
      setLiked(true);
      setNumberOfLikes(props.allLikes.length + 1);
      addLikes(props.postId, 1);
    }
  };
  const deleteLike = async (postId: number, userId: number) => {
    const deleted = await unlikePost(postId, userId);
    return deleted;
  };
  const addLikes = async (postId: number, userId: number) => {
    const add = await addLike(userId, postId);
    return add;
  };
  return (
    <>
      {numberOflikes}
      <IconButton onClick={handleClick}>
        {liked ? (
          <>
            <FavoriteIcon />{' '}
          </>
        ) : (
          <>
            <FavoriteBorderIcon />
          </>
        )}
      </IconButton>
    </>
  );
}
