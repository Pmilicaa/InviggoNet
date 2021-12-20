import { Request, Response } from "express";

const jwt = require("jsonwebtoken");

const verifyToken = (req: any, res: Response, next: any) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, "sedrftghyjkds567wikjd678ik3");
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};
export default verifyToken;
