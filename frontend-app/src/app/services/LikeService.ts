import axios from 'axios';
export const addLike = async (userId: number, postId: number) => {
  return await axios
    .post('http://localhost:5000/api/posts/likes', {
      userId,
      postId,
    })
    .then(response => {
      return response.data;
    });
};
export const getAllLikes = async (postId: number) => {
  return await axios
    .post('http://localhost:5000/api/posts/allLikes', {
      postId,
    })
    .then(response => {
      return response.data;
    });
};
