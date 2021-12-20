import { Post } from "../ts-models/Post";
import { getOne, addPostToUser } from "../repositories/user.repository";
const createPost = async (body: any) => {
  try {
    const user = await getOne(body);
    const id = user?.id;

    const post = {
      content: String(body.content),
      createdAt: new Date(),
      user: user,
      userId: id,
    };
    Post.create(post);
    //user?.posts?.push(post);
    return post;
  } catch (err: any) {
    throw new Error(err);
  }
};
const getPosts = async (body: any) => {
  try {
    const user = await getOne(body);
    const id = user?.id;
    console.log(
      JSON.stringify(user) +
        "user je" +
        body +
        "body je----------------------------------------------------------"
    );
    const posts = await Post.findAll({
      where: {
        userId: id,
      },
    });
    return posts;
  } catch (err: any) {
    throw new Error(err);
  }
};
const getPost = async (id: any) => {
  try {
    const post = await Post.findOne({
      where: {
        id: id,
      },
    });
    return post;
  } catch (err: any) {
    throw new Error(err);
  }
};
export { createPost, getPost, getPosts };
