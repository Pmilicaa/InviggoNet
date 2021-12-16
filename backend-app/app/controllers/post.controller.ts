import addPost from "../services/post.service";

exports.newPost = async (req: any, res: any) => {
  const post = await addPost(req.body);
  res.send(JSON.stringify(post));
};
