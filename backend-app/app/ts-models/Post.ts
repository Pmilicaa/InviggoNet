import {
  Table,
  Column,
  Model,
  HasMany,
  NotEmpty,
  CreatedAt,
  BelongsTo,
} from "sequelize-typescript";
import { Comment } from "./Comment";
import { User } from "./User";

@Table
export class Post extends Model {
  @NotEmpty
  @Column
  content!: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @BelongsTo(() => User, { foreignKey: "userPost" })
  user?: User;

  @HasMany(() => Comment, { foreignKey: "postComment" })
  comments?: Comment[];
}
