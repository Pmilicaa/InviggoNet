import {
  createLike,
  getLike,
  getLikes,
  getPostLikes,
} from "../repositories/like.repository";

const create = async (params: any) => {
  try {
    const like = await createLike(params);
    console.log(JSON.stringify(like) + "kreiran like");
    return like;
  } catch (err: any) {
    throw new Error("greska");
  }
};
const getAll = async () => {
  try {
    const likes = await getLikes();
    console.log(JSON.stringify(likes) + "lajkovi");
    return likes;
  } catch (err: any) {
    throw new Error("nema lajkova");
  }
};
const getOne = async (params: any) => {
  try {
    const like = await getLike(params.id);
    console.log(JSON.stringify(like) + "jedan like");
    return like;
  } catch (err: any) {
    throw new Error("nema tog lajka");
  }
};
const getAllPostLikes = async (postId: number) => {
  try {
    const postLikes = await getPostLikes(postId);
    return postLikes;
  } catch (err: any) {
    throw new Error();
  }
};
export { create, getAll, getOne, getAllPostLikes };
