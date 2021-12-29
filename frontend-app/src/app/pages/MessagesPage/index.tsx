import Chat from 'app/components/Chat';
import FriendList from 'app/components/FriendList';
import { useState } from 'react';
import { User } from 'types/models/User';

export const MessagesPage = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      username: 'MarkoKralj123',
      firstName: 'Marko',
      lastName: 'Kraljevic',
      email: 'markokreveas@gmail.com',
      age: 12,
      gender: 'male',
      image:
        'https://firebasestorage.googleapis.com/v0/b/fir-upload-image-2e659.appspot.com/o/images%2Fok.png?alt=media&token=77435c72-2c4e-4ea4-a365-058f9bec9b2e',
    },
    {
      id: 2,
      username: 'MarkoKralj123',
      firstName: 'Marko',
      lastName: 'Kraljevic',
      email: 'markokreveas@gmail.com',
      age: 12,
      gender: 'male',
    },
    {
      id: 3,
      username: 'MarkoKralj123',
      firstName: 'Marko',
      lastName: 'Kraljevic',
      email: 'markokreveas@gmail.com',
      age: 12,
      gender: 'male',
    },
  ]);

  return (
    <div style={{ display: 'flex', marginTop: '10px' }}>
      <div style={{ flexGrow: 3, width: '30%', height: 'calc(100vh - 68px)'  }}>
        <FriendList friends={users} />
      </div>
      <div style={{ flexGrow: 7, width: '70%', height: 'calc(100vh - 68px)' }}>
        <Chat
          friend={{
            firstName: 'Dusan',
            lastName: 'RNG',
          }}
          messages={[
            {
              content: 'Poruka neka velika mozda i malo veca',
              date: new Date(),
              myMessage: false,
            },
            {
              content:
                'Problem kod nekih poruka sto su malo vece i onda ne mogu da radim sa njima sta hocu, tako da u napraviti najvecu poruku mozda ikad',
              date: new Date(),
              myMessage: true,
            },
          ]}
        />
      </div>
    </div>
  );
};
