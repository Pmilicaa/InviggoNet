module.exports = (app: any) => {
  const users = require("../controllers/user.controller");

  var router = require("express").Router();
  router.get("/", users.findAll);
  router.post("/me", users.getMyInfo);
  router.post("/", users.registerUser);
  app.use("/api/users", router);
};
