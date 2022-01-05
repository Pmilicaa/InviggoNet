import { addMessage, getAllMessages } from "../repositories/message.repository";
import { io } from "../server";

const newMessage = async (params: any) => {
  const added = await addMessage(params);
  return added;
};
//.then((message) => io.emit("send_message", message));
const getMessages = async (params: any) => {
  const allMessages = await getAllMessages(params);

  console.log(params + "sve poruke");
  return allMessages;
};
export { newMessage, getMessages };
