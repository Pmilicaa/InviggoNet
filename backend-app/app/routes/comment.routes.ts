module.exports = (app: any) => {
  const comment = require("../controllers/comment.controller");

  var router = require("express").Router();
  router.post("/", comment.newComment);
  router.post("/all", comment.getAllComments);

  app.use("/api/comments", router);
};
