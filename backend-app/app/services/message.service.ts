import { addMessage, getAllMessages } from "../repositories/message.repository";
import { io } from "../server";

const newMessage = async (params: any) => {
  addMessage(params).then((message) => io.emit("receive_message", message));
};
const getMessages = async (params: any) => {
  const allMessages = await getAllMessages(params);

  console.log(allMessages + "sve poruke");
  return allMessages;
};
export { newMessage, getMessages };
