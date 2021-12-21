import {
  createPost,
  getPosts,
  getFriendsPosts,
} from "../repositories/post.repository";
import { Friendship } from "../ts-models/Friendship";
import { Post } from "../ts-models/Post";
import { getMe } from "./user.service";

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
const friendsPosts = async (params: any) => {
  try {
    const friends = await getFriendsPosts(params);
    console.log(params + "doslo u servis parametri");
    return friends;
  } catch (err: any) {
    throw new Error();
  }
};

export { addPost, getAllUserPost, friendsPosts };
