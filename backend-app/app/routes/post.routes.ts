module.exports = (app: any) => {
  const posts = require("../controllers/post.controller");

  var router = require("express").Router();
  router.post("/", posts.newPost);
  router.post("/all", posts.getAllPost);

  app.use("/api/posts", router);
};
