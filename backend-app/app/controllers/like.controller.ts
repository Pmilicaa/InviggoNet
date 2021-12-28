import { getLike, getLikes } from "../repositories/like.repository";
import {
  allUserLikes,
  create,
  getAllPostLikes,
  unlike,
} from "../services/like.service";

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
  console.log(req.body.postId + "post id u likeu");
  const likes = await getAllPostLikes(req.body.postId);
  res.send(JSON.stringify(likes));
};
export const getUserLikes = async (req: any, res: any) => {
  console.log(req.body.postId + "post id u likeu");
  console.log(req.body.userId + "post id u likeu");

  const likes = await allUserLikes(req.body);
  res.send(JSON.stringify(likes));
};
export const unlikePost = async (req: any, res: any) => {
  console.log("usao");
  console.log(req.params.id + "likeid");
  try {
    await unlike(req.params);
    res.json(true);
  } catch (err: any) {
    throw new Error("nesto pukiro");
  }
};
export const createLike = async (req: any, res: any) => {
  console.log(req.body + "tijelo od create likes");
  const like = await create(req.body);
  res.send(JSON.stringify(like));
};
