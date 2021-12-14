import { Like } from './Like';

export interface Post {
  content: String;
  userId?: Number;
  likes?: Array<Like>;
  comments?: Array<Comment>;
}
