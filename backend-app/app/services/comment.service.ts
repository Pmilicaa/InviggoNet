import {
  getComment,
  getComments,
  getUserComments,
  createComment,
} from "../repositories/comment.repository";
const addComment = (params: any) => {
  console.log(params.userId + "parametri su");
  console.log(params.content + "parametri su");

  createComment(params);
};
const getAllComments = async (params: any) => {
  try {
    const comments = await getComments(params);
    console.log(comments + "komentari su od tog usera");
    return comments;
  } catch (err: any) {
    throw new Error();
  }
};
const getPostComments = async (params: any) => {
  try {
    const comments = await getComments(params);
    console.log(comments + "komentari od to g posta su heheh i da vidimi");
    return comments;
  } catch (err: any) {
    throw new Error();
  }
};
export { addComment, getAllComments, getPostComments };
