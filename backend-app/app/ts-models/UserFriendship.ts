import {
  Table,
  Column,
  Model,
  ForeignKey,
} from "sequelize-typescript";
import { Friendship } from "./Friendship";
import { User } from "./User";

@Table
export class UserFriendship extends Model<UserFriendship> {
  @ForeignKey(() => User)
  @Column
  userId?: number;

  @ForeignKey(() => Friendship)
  @Column
  friendshipId?: number;

  // @BelongsTo(() => User, { foreignKey: "userFriendship" })
  // user?: User;

  // @BelongsTo(() => Friendship, { foreignKey: "userFriendshipF" })
  // friendship?: Friendship;
}
