import { Box, InputAdornment, TextField } from '@mui/material';
import { getAllMessages } from 'app/services/MessageService';
import React, { useEffect, useState, useRef } from 'react';
import SendIcon from '@mui/icons-material/Send';

const Message = ({ message }) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: message.content ? 'flex-end' : 'flex-start',
        }}
      >
        <div
          style={{
            maxWidth: '50%',
          }}
        >
          <div
            style={{
              borderRadius: '15px',
              backgroundColor: message.content ? 'orange' : 'red',
              color: 'white',
              margin: '10px',
              padding: '10px',
            }}
          >
            {message.content}
          </div>
          <div
            style={{
              paddingInline: '20px',
              textAlign: message.content ? 'end' : 'start',
            }}
          >
            Sent:{message.sender}{' '}
            {new Date(message.createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </>
  );
};

const Chat = ({ friend, socket, friendshipId, sender }) => {
  const [messages, setMessages] = useState<any>([]);
  const messagesEnd = useRef<HTMLDivElement>(null);
  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => {
    const poruke = async () => {
      const primljenePoruke = await getMessages();
      setMessages(primljenePoruke);
    };
    poruke();
  }, []);

  const getMessages = async () => {
    const allMessages = await getAllMessages(friendshipId);
    return allMessages;
  };
  useEffect(() => {
    const socket = io('ws://localhost:5000');


  useEffect(() => {
    let init = false;
    socket.on('initilize_chat', data => {
      if (!init) {
        for (const message of data) {
          message.myMessage = message.sender.id === sender.id;
        }
        console.log("prosao i ovde");
        setMessages(data);
      }
    });
    socket.on('chat_messages', data => {
      setMessages(data);
    });
  }, []);
  const handleEnter = e => {
    if (!currentMessage) return;
    if (e.code === 'Enter') {
      console.log(sender);
      console.log(sender.id);
      let messageData = {
        content: currentMessage,
        friendshipId: friendshipId,
        senderId: sender.id,
      };
      socket.emit('send_message', messageData);
      setCurrentMessage('');
    }
  };

  const sendMessage = async () => {
    let messageData = {
      content: currentMessage,
      room: friendshipId,
      sender: sender,
    };
    await socket.emit('send_message', messageData);
    setCurrentMessage('');
  };

  const scrollToBottom = () => {
    if (messagesEnd.current)
      messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div
        className="containerWithoutMargin"
        style={{
          padding: '10px',
          borderLeft: 'black solid 1px',
          backgroundImage: 'linear-gradient(white, #00aaff)',
        }}
      >
        <h1 style={{ textAlign: 'center' }}>
          {friend.firstName} {friend.lastName}
        </h1>
        <div
          style={{
            overflow: 'scroll',
            overflowY: 'auto',
            height: '74vh',
            overflowX: 'hidden',
            marginBottom: '30px',
          }}
        >
          {messages.map((message, index) => (
            <Message message={message} key={index}/>
          ))}
          <div ref={messagesEnd} />
        </div>
        <TextField
          id="outlined-search"
          type="search"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <div style={{ color: 'white' }}>
                  <SendIcon color="inherit" onClick={sendMessage} />
                </div>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          inputProps={{
            style: { backgroundColor: 'white' },
          }}
          sx={{
            margin: 'auto',
            width: '70%',
          }}
          size="small"
          value={currentMessage}
          onChange={e => {
            setCurrentMessage(e.target.value);
          }}
          onKeyPress={handleEnter}
        />
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
    </div>
  );
};

export default Chat;
