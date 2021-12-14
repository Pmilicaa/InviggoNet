import { Friendship } from './Friendship';
import { Like } from './Like';
import { Post } from './Post';

export interface User {
  email: String;
  username: String;
  password: String;
  firstName: String;
  lastName: String;
  gender: String;
  age: Number;
  phoneNumber: String;
  posts?: Array<Post>;
  likes?: Array<Like>;
  friendships?: Array<Friendship>;
}
