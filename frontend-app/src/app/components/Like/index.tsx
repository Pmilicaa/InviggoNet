import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAllLikes } from 'app/services/LikeService';
export function Like(props) {
  const [like, setLike] = useState(false);
  const [likes, setLikes] = useState([]);
  const [numberOflikes, setNumberOfLikes] = useState(0);
  //const [count, setCount] = useState(0);
  useEffect(() => {
    const productId = 1;
    getLikes(productId);
    // setCount(likes.length);
    setNumberOfLikes(likes.length);
    console.log(numberOflikes);
  }, [numberOflikes]);

  const getLikes = async (productId: number) => {
    const allLikes = await getAllLikes(productId);
    setLikes(allLikes);
    return allLikes;
  };
  let count = likes.length;
  const handleClick = () => {
    console.log('klikno');
    if (like) {
      setLike(false);
      count = count - 1;
      setNumberOfLikes(count);
    } else {
      setLike(true);
      count = count + 1;
      setNumberOfLikes(count + 1);

      addLike(1, 1);
    }
  };

  const addLike = async (productId: number, userId: number) => {
    const add = await addLike(userId, productId);
    setNumberOfLikes(count + 1);
  };
  return (
    <>
      <IconButton onClick={handleClick}>
        {like ? (
          <>
            {count + 1}
            <FavoriteIcon />{' '}
          </>
        ) : (
          <>
            {count - 1} <FavoriteBorderIcon />
          </>
        )}
      </IconButton>
    </>
  );
}
