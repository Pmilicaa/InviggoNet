import { Button } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useCurrentUserSlice } from './slice';

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

  const history = useHistory();

  const { actions } = useCurrentUserSlice();

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(actions.login({ username, password }));
    setUsername('');
    setPassword('');
    history.push({
      pathname: '/',
    });
  };

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
          <Button onClick={handleLogin} color="primary">
            Log in
          </Button>
        </div>
      </div>
    </>
  );
};
