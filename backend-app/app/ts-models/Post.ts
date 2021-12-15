import { Table, Column, Model, HasMany, NotEmpty, CreatedAt, BelongsTo } from 'sequelize-typescript'
import { Comment } from './Comment';
import { User } from './User';

@Table
export class Post extends Model<Post> {
    
    @Column
    @NotEmpty
    content!: string

    @CreatedAt
    @Column
    createdAt!: Date;

    @BelongsTo(() => User)
    user?: User

    @HasMany(() => Comment)
    comments?: Comment[]

}