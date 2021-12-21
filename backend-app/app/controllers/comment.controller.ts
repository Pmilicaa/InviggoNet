import { addComment, getAllComments } from "../services/comment.service";

exports.getAllComments = async (req: any, res: any) => {
  const allComments = await getAllComments(req.body);
  console.log("komentari u kontroleru su ti i ti");
  res.send(JSON.stringify(allComments));
};
exports.newComment = async (req: any, res: any) => {
  const newComment = await addComment(req.body);

  console.log(req.body.userId + "da vidimo sta je doslo");
  console.log(JSON.stringify(newComment) + "novi koment je to");
  res.send(JSON.stringify(newComment));
};
