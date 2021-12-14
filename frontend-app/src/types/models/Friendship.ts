import { User } from './User';

export interface Friendship {
  accepted: boolean;
  users?: Array<User>;
  senderId?: Number;
}
