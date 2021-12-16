import userService from '../services/user.service';
import express, { Request, Response } from 'express'

const router = express.Router();


router.get('/search', async (req: Request, res: Response) => {
  console.log(req.query);
  const search = req.query.search as string;
  try {
    const users = await userService.searchUsers(search);
    return res.json(users);

  } catch (error) {
    return res.sendStatus(400);
  }
})

export default router;
