import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { addLike, getAllLikes, unlikePost } from 'app/services/LikeService';
export function Like(props) {
  const [like, setLike] = useState(false);
  const [numberOflikes, setNumberOfLikes] = useState(0);
  const [lajkovao, setLajkovao] = useState(false);
  useEffect(() => {
    console.log(numberOflikes + 'u useefektu');
    provjeraUsera();
    // if (!status) {
    //   setLajkovao(true);
    // }
  }, []);
  function provjeraUsera() {
    let status = false;
    console.log(props.allLikes);
    for (let index = 0; index < props.userLikes.length; index++) {
      const element = props.userLikes[index];
      console.log(element.userId);
      for (let inx = 0; inx < props.allLikes.length; inx++) {
        const like = props.allLikes[inx];
        if (element.userId === like.userId) {
          status = true;
        }
      }
    }
    if (!status) {
      setLajkovao(true);
    }
  }
  const handleClick = () => {
    console.log(props.allLikes.lenght + 'duzina likea');
    console.log(lajkovao);
    if (lajkovao) {
      setLike(false);
      setLajkovao(false);
      setNumberOfLikes(props.allLikes.lenght + 1);
      const userId = 1;
      deleteLike(props.postId, userId);
    } else {
      setLajkovao(true);
      setLike(true);
      setNumberOfLikes(props.allLikes.lenght - 1);
      addLikes(props.postId, 1);
    }
  };
  const deleteLike = async (postId: number, userId: number) => {
    const deleted = await unlikePost(postId, userId);
    console.log(deleted + 'izbrisan');
    return deleted;
  };
  const addLikes = async (postId: number, userId: number) => {
    const add = await addLike(userId, postId);
    console.log(props.likes);
    return add;
  };
  return (
    <>
      {props.allLikes.length}
      <IconButton onClick={handleClick}>
        {lajkovao ? (
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
