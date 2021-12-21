import verifyToken from "../services/auth.service";
module.exports = (app: any) => {
  const users = require("../controllers/user.controller");
  const auth = require("../controllers/auth.controller");
  var router = require("express").Router();
  router.get("/", verifyToken, users.findAll);
  router.post("/me", verifyToken, users.getMyInfo);
  router.post("/", users.registerUser);
  router.get("/search", users.search);
  router.post("/login", auth.login);
  app.use("/api/users", router);
};
