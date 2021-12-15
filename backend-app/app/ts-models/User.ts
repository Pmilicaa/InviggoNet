import { Table, Column, Model, HasMany, NotEmpty, BelongsToMany} from 'sequelize-typescript'
import { Friendship } from './Friendship'
import { Post } from './Post'
import { UserFriendship } from './UserFriendship'

@Table
export class User extends Model<User> {
    
    @Column
    @NotEmpty
    email!: string

    @Column
    @NotEmpty
    username!: string

    @Column
    @NotEmpty
    password!: string

    @Column
    @NotEmpty
    firstName!: string

    @Column
    @NotEmpty
    lastName!: string

    @Column
    gender?: string

    @Column
    age?: number

    @HasMany(() => Post)
    posts?: Post[]

    @BelongsToMany(() => Friendship, () => UserFriendship)
    friends!: Friendship[]
    
}