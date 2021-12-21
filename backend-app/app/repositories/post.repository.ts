import { Post } from "../ts-models/Post";
import { getOne, addPostToUser } from "../repositories/user.repository";
import { getFriendRequests } from "../repositories/friendship.repository";
const createPost = async (body: any) => {
  try {
    const user = await getOne(body);
    const id = user?.id;
    console.log(user?.username + "user je dosao sa tim i tim imenom");
    const post = {
      content: String(body.content),
      createdAt: new Date(),
      user: user,
      userId: id,
    };
    console.log(body.content + "content je");
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
const getAllPosts = async () => {
  try {
    const posts = await Post.findAll();
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
const getFriendsPosts = async (id: any) => {
  const friendReq = await getFriendRequests(id.userId);
  const friends: any = [];
  friendReq.map((sender) => friends.push(sender.senderId));
  const allPosts = await getAllPosts();
  const friendsPosts: any = [];
  for (let index = 0; index < allPosts.length; index++) {
    for (let inx = 0; inx < friends.length; inx++) {
      if (allPosts[index].userId === friends[inx]) {
        friendsPosts.push(allPosts[index]);
      }
    }
  }
  return friendsPosts;
};
export { createPost, getPost, getPosts, getFriendsPosts };
