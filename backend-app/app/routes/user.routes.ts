import verifyToken from "../services/auth.service";
import { searchMiddleware } from "../services/auth.service";

module.exports = (app: any) => {
  const users = require("../controllers/user.controller");
  const auth = require("../controllers/auth.controller");
  var router = require("express").Router();
  router.get("/", verifyToken, users.findAll);
  router.post("/me", verifyToken, users.getMyInfo);
  router.post("/", users.registerUser);
  router.post("/current", verifyToken, users.getCurrentUser);
  router.get("/search", searchMiddleware, users.search);
  router.post("/login", auth.login);
  router.post("/getInfo", users.getFriend);
  app.use("/api/users", router);
};
