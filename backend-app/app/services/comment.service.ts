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
export { addComment, getAllComments };
