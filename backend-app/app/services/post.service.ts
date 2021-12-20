import { createPost, getPosts } from "../repositories/post.repository";

const addPost = async (params: any) => {
  createPost(params);
};
const getAllUserPost = async (params: any) => {
  try {
    const userPosts = await getPosts(params);
    console.log(JSON.stringify(userPosts) + "listy");
    return userPosts;
  } catch (err) {
    throw new Error("Error");
  }
};
export { addPost, getAllUserPost };
