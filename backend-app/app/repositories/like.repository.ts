import { Like } from "../ts-models/Like";
import { getPost } from "./post.repository";
import { getOneById } from "./user.repository";

const getLike = async (id: number) => {
  try {
    const like = await Like.findByPk(id);
    return like;
  } catch (err: any) {
    throw new Error();
  }
};
const getPostLikes = async (postId: number) => {
  try {
    const likes = await Like.findAll({
      where: {
        postId: postId,
      },
    });
    return likes;
  } catch (err: any) {
    throw new Error("nema post lajkove");
  }
};
const getLikes = async () => {
  try {
    const likes = await Like.findAll();
    return likes;
  } catch (err: any) {
    throw new Error();
  }
};
const createLike = async (body: any) => {
  try {
    const user = await getOneById(body.userId);
    const post = await getPost(body.postId);
    const like = {
      userId: body.userId,
      postId: body.postId,
      user: user,
      post: post,
    };
    Like.create(like);
    return like;
  } catch (err: any) {
    throw new Error();
  }
};
export { getLike, getLikes, createLike, getPostLikes };
