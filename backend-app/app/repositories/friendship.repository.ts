import { Kind } from "../dto/user..search.dto.";
import { Friendship } from "../ts-models/Friendship"
import { User } from "../ts-models/User";


export const addRequestFriendship = async (sender: User, reciver: User): Promise<void> => {
    
    const friendship = await Friendship.create({
        accepted: false,
        senderId: sender.id,
        reciverId: reciver.id
    });

}

export const acceptFriendRequest = async (friendshipId: number): Promise<void> => {
    const friendship = await Friendship.findByPk(friendshipId)
    if (!friendship)
        throw Error('Empty friendship');
    friendship.accepted = true;
    await friendship.save();
}


export const getFriendRequests = async (userId: number): Promise<Friendship[]> => {
    
    const friendReq = await Friendship.findAll({
        where: {
            reciverId: userId
        },
        include: {
            model: User,
            as: 'sender'
        }
    })
    return friendReq;
}

export const deleteFriendRequest = async (id: number): Promise<void> => {
    
    await Friendship.destroy({
        where: {
            id
        }
    })
}

export const checkFriends = async (senderId: number, reciverId: number): Promise<Kind> => {
    const friendship = await Friendship.findOne({
        where: {
            senderId,
            reciverId
        }
    });
    if(!friendship)
        return null;
    return friendship.accepted;
}