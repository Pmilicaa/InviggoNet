import { Table, Column, Model, NotEmpty, CreatedAt, BelongsTo, HasMany, HasOne } from 'sequelize-typescript'
import { Post } from './Post';
import { User } from './User';

@Table
export class Comment extends Model<Comment> {
    
    @Column
    @NotEmpty
    content!: string

    @CreatedAt
    @Column
    createdAt!: Date;

    @BelongsTo(() => Post)
    post?: Post

    @HasOne(() => User)
    user?: User
}