module.exports = (app: any) => {
  const posts = require("../controllers/post.controller");

  var router = require("express").Router();
  router.post("/", posts.newPost);
  app.use("/api/posts", router);
};
