import { TextField } from '@mui/material';
import { getAllMessages } from 'app/services/MessageService';
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

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

    socket.on('receive_message', data => {
      setMessages(messages => [...messages, data]);
    });
    socket.on('chat_messages', data => {
      setMessages(data);
    });
  }, []);
  const handleEnter = e => {
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

  return (
    <div>
      <div
        className="containerWithoutMargin"
        style={{
          padding: '10px',
          borderLeft: 'black solid 1px',
          height: '100%',
          backgroundImage: 'linear-gradient(white, #00aaff)',
        }}
      >
        <h1 style={{ textAlign: 'center' }}></h1>

        {/* {messages.map(message => (
          <Message message={message} />
        ))} */}
      </div>
      <div>
        <TextField
          id="outlined-search"
          type="search"
          variant="outlined"
          inputProps={{
            style: { backgroundColor: 'white' },
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
