import { getLike, getLikes } from "../repositories/like.repository";
import { create, getAllPostLikes } from "../services/like.service";

export const getAll = async (req: any, res: any) => {
  console.log(req.body + "body u kontroleru za likes");
  const likes = await getLikes();
  res.send(JSON.stringify(likes));
};
export const getOne = async (req: any, res: any) => {
  console.log(req.body + "body u kontroleru za like");
  const like = await getLike(req.body);
  res.send(JSON.stringify(like));
};
export const getAllLikes = async (req: any, res: any) => {
  console.log(req.body + "post id u likeu");
  const likes = await getAllPostLikes(req.body.postId);
  res.send(JSON.stringify(likes));
};
export const createLike = async (req: any, res: any) => {
  console.log(req.body + "tijelo od create likes");
  const like = await create(req.body);
  res.send(JSON.stringify(like));
};
