import { Box, InputAdornment, TextField } from '@mui/material';
import { getAllMessages } from 'app/services/MessageService';
import React, { useEffect, useState, useRef } from 'react';
import SendIcon from '@mui/icons-material/Send';

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
          Sent:
        </div>
      </div>
    </div>
  );
};

const Chat = ({ friend, socket, friendshipId, sender }) => {
  const [messages, setMessages] = useState<any>([]);
  const messagesEnd = useRef<HTMLDivElement>(null);
  const [currentMessage, setCurrentMessage] = useState('');

  // useEffect(() => {
  //   // const poruke = svePoruke();
  //   //console.log(poruke + 'sve poruke u chatu');
  //   const poruke = async () => {
  //     const primljenePoruke = await getMessages();
  //     console.log(primljenePoruke);
  //     setMessages(primljenePoruke);
  //   };
  //   poruke();
  // }, [friendshipId]);

  // const getMessages = async () => {
  //   const allMessages = await getAllMessages(friendshipId);
  //   console.log(allMessages);
  //   for (const message of allMessages) {
  //     message.myMessage = message.senderId === sender.id;
  //   }
  //   return allMessages;
  // };


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

    socket.on('receive_message', data => {
      console.log(data);
      data.myMessage = data.sender.id === sender.id;
      setMessages((list) => [...list, data]);
    });
  }, [socket]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleEnter = e => {
    if (!currentMessage) return;
    if (e.code === 'Enter') {
      sendMessage();
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
      </div>
    </div>
  );
};

export default Chat;
