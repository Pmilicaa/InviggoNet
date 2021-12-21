import { Button } from '@material-ui/core';
import { useState } from 'react';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const handleLogin = async () => {
  //     try {
  //         await login(username, password);
  //         const user = await getUserData();
  //         setUser(user);
  //         navigate('/');
  //     }
  //     catch (err) {
  //         alert('Wrong username or password')
  //         setPassword('');
  //         setUsername('');
  //     }
  // }

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Log in</h1>
      <div className="cart grid-container" style={{ fontSize: '20px' }}>
        <div className="label">
          <label>Username:</label>
        </div>
        <div className="input-text">
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            id="username"
            name="username"
          />
          <br />
        </div>
        <div className="label">
          <label>Password:</label>
        </div>
        <div className="input-text">
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            id="password"
            name="password"
          />
        </div>
        <div className="login-btn">
          <Button color="primary">Log in</Button>
        </div>
      </div>
    </>
  );
};
