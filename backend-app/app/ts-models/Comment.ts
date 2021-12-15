import {
  Table,
  Column,
  Model,
  NotEmpty,
  CreatedAt,
  BelongsTo,
  HasMany,
  HasOne,
} from "sequelize-typescript";
import { Post } from "./Post";
import { User } from "./User";

@Table
export class Comment extends Model {
  @NotEmpty
  @Column
  content!: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @BelongsTo(() => Post, { foreignKey: "postComment" })
  post?: Post;
  //{ foreignKey: "userComment" }

  @BelongsTo(() => User, { foreignKey: "userComment" })
  user?: User;
}
