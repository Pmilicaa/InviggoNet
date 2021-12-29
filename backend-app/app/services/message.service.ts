import { addMessage, getAllMessages } from "../repositories/message.repository";

const newMessage = async (params: any) => {
  addMessage(params);
};
const getMessages = async (params: any) => {
  const allMessages = await getAllMessages(params);
  console.log(allMessages + "sve poruke");
  return allMessages;
};
export { newMessage, getMessages };
