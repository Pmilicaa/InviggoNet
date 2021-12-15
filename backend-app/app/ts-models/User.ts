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
export class User extends Model<User> {
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

  @HasMany(() => Post, { foreignKey: "userPost" })
  posts?: Post[];

  @HasMany(() => Comment, { foreignKey: "userComment" })
  comments?: Comment[];

  @HasMany(() => Friendship, { foreignKey: "userFriendship" })
  friendship?: Friendship[];

  @HasMany(() => UserFriendship, { foreignKey: "userFriendshipF" })
  userFriendship?: UserFriendship[];
}
