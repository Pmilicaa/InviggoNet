import { addPost, getAllUserPost } from "../services/post.service";

exports.newPost = async (req: any, res: any) => {
  const post = await addPost(req.body);
  console.log(post + "dosao je post");
  res.send(JSON.stringify(post));
};
exports.getAllPost = async (req: any, res: any) => {
  const allPosts = await getAllUserPost(req.body);
  console.log(req.body.username + "postovi");
  return res.send(JSON.stringify(allPosts));
};
