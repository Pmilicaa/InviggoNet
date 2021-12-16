import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { User } from 'types/models/User';
import { SearchUser } from '../../components/SearchUser';
export function SearchUserPage() {
  const users: User[] = [
    {
      email: 'asdf@gmail.com',
      username: 'PykeMain',
      firstName: 'Ime',
      lastName: 'Prezime',
      gender: 'Male',
      age: 23,
      phoneNumber: '233444',
    },
    {
      email: 'asdf@gmail.com',
      username: 'PykeMain',
      firstName: 'Ime',
      lastName: 'Prezime',
      gender: 'Male',
      age: 23,
      phoneNumber: '233444',
    },
  ];

  return (
    <>
      <Helmet>
        <title>User result</title>
        <meta name="description" content="Result of search" />
      </Helmet>
      <div className="container">
        <h3>Search result</h3>
        <div>
          {users.map(user => (
            <SearchUser user={user} />
          ))}
        </div>
      </div>
    </>
  );
}
