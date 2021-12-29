import React from 'react';

const Message = ({ message }) => {
  let length = message.content.length * 9;
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

const Chat = ({ friend, messages }) => {
  return (
    <div className='containerWithoutMargin' style={{ padding: '10px', borderLeft: 'black solid 1px', height: '100%', backgroundImage: 'linear-gradient(white, #00aaff)' }}>
      <h1 style={{ textAlign: 'center'}}>
        {friend.firstName} {friend.lastName}
      </h1>

      {messages.map(message => (
        <Message message={message} />
      ))}
    </div>
  );
};

export default Chat;
