import { Schema, model, connect } from 'mongoose';

export interface Message {
    content: string,
    friendshipId: number,
    senderId: number
}

const schema = new Schema<Message>({
    content: { type: String, required: true },
    friendshipId: { type: Number, required: true },
    senderId: { type: Number, required: true },
});

const MessageModel = model<Message>('Message', schema);

export async function run(): Promise<void> {
    const uri =
        "mongodb+srv://milica:inviggo@cluster0.mcbk5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    await connect(uri);
}
