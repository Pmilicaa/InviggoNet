import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Message = ({ message }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: message.myMessage ? 'flex-end' : 'flex-start',
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
            backgroundColor: message.myMessage ? 'orange' : 'red',
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
            textAlign: message.myMessage ? 'end' : 'start',
          }}
        >
          Sent: {message.date.toLocaleDateString('sr-RS')}
        </div>
      </div>
    </div>
  );
};

const Chat = ({ friend, socket, friendshipId, sender }) => {


  const [messages, setMessages] = useState<any>([]);
  const [currentMessage, setCurrentMessage ] = useState("");

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages([...messages, data]);
    });
  }, [socket]);

  const handleEnter = e => {
    if (e.code === 'Enter') {
      let messageData = {
        content: currentMessage,
        room: friendshipId,
        sender: sender,
      }
      socket.emit("send_message", messageData);
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
        <h1 style={{ textAlign: 'center' }}>
          {friend.firstName} {friend.lastName}
        </h1>

        {messages.map(message => (
          <Message message={message} />
        ))}
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
      </div>
    </div>
  );
};

export default Chat;
