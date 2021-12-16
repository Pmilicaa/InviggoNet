import { createPost } from "../repositories/post.repository";

const addPost = async (params: any) => {
  createPost(params);
};
export default addPost;
