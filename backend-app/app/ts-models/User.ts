import {
  Table,
  Column,
  Model,
  HasMany,
  NotEmpty,
  BelongsToMany,
} from "sequelize-typescript";
import { Comment } from "./Comment";
import { Friendship } from "./Friendship";
import { Post } from "./Post";
import { UserFriendship } from "./UserFriendship";

@Table
export class User extends Model {
  @NotEmpty
  @Column
  email!: string;

  @NotEmpty
  @Column
  username!: string;

  @NotEmpty
  @Column
  password!: string;

  @NotEmpty
  @Column
  firstName!: string;

  @NotEmpty
  @Column
  lastName!: string;

  @Column
  gender?: string;

  @Column
  age?: number;

  @Column
  phoneNumber?: number;

  @Column
  image?: string;

  @HasMany(() => Post, { foreignKey: "userPost" })
  posts?: Post[];

  @HasMany(() => Comment, { foreignKey: "userComment" })
  comments?: Comment[];

  @BelongsToMany(() => Friendship, () => UserFriendship)
  friendships?: Friendship[];

}
