import { TextField } from '@mui/material';
import { getAllMessages } from 'app/services/MessageService';
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const Message = ({ message }) => {
  return (
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
          Sent: {message.sender}
        </div>
      </div>
    </div>
  );
};

const Chat = ({ friend, socket, friendshipId, sender }) => {
  const [messages, setMessages] = useState<any>([]);
  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => {
    // const poruke = svePoruke();
    //console.log(poruke + 'sve poruke u chatu');
    const poruke = async () => {
      const primljenePoruke = await getMessages();
      console.log(primljenePoruke);
      setMessages(primljenePoruke);
    };
    poruke();
  }, []);

  const getMessages = async () => {
    const friendshipIdN = 1;
    const allMessages = await getAllMessages(friendshipIdN);
    //  setMessages(allMessages);
    console.log(messages);
    return allMessages;
  };
  useEffect(() => {
    const socket = io('ws://localhost:5000');

    socket.on('receive_message', data => {
      setMessages(messages => [...messages, data]);
    });

    socket.on('connnection', () => {
      console.log('connected to server');
    });

    // socket.on('receive_message', newMessage: Message) => {
    //   console.log(newMessage);
    //   setMessages(meessage => [...messages, newMessage]);
    // });
  }, []);

  const handleEnter = e => {
    if (e.code === 'Enter') {
      let messageData = {
        content: currentMessage,
        room: friendshipId,
        sender: sender,
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
        {messages.map(message => (
          <Message message={message} />
        ))}
      </div>
    </div>
  );
};

export default Chat;
