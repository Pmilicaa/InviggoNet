import {
  Table,
  Column,
  Model,
  NotEmpty,
  CreatedAt,
  ForeignKey,
  BelongsToMany,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import { User } from "./User";
import { UserFriendship } from "./UserFriendship";

@Table
export class Friendship extends Model<Friendship> {
  @Column
  accepted!: boolean;

  @CreatedAt
  @Column
  createdAt!: Date;

  @BelongsToMany(() => User, () => UserFriendship)
  friends?: Friendship[]

  @ForeignKey(() => User)
  @Column
  senderId?: number;
}
