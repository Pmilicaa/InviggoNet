module.exports = (app: any) => {
  const posts = require("../controllers/post.controller");
  const likes = require("../controllers/like.controller");

  var router = require("express").Router();
  router.post("/", posts.newPost);
  router.post("/allLikes", likes.getAllLikes);
  router.post("/likes", likes.createLike);
  router.post("/all", posts.getAllPost);
  router.post("/friendsPosts", posts.friendsPosts);
  app.use("/api/posts", router);
};
