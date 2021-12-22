import { Button } from '@mui/material';

export const User = ({ user, addFriend, loggedIn }) => {
  return (
    <div className="cart">
      <div style={{ display: 'inline-block' }}>
        <h4>Username: {user.username}</h4>
        <p>First name: {user.firstName}</p>
        <p>Last name: {user.lastName}</p>
      </div>
      {addFriend ? (
        <div style={{ display: 'inline-block', float: 'right' }}>
          <Button onClick={addFriend} variant="contained">
            Add friend
          </Button>
        </div>
      ) : user.friends === false ? (
        <div style={{ display: 'inline-block', float: 'right' }}>
          <h3 style={{ color: '#1976d2' }}>Pending</h3>
        </div>
      ) : loggedIn ? (
        <div style={{ display: 'inline-block', float: 'right' }}>
          <div>
            <h3 style={{ color: '#1976d2', textAlign: 'center' }}>Friends</h3>
            <Button style={{ width: '100px' }} variant="contained">
              Profile
            </Button>
          </div>
        </div>
      ) : (
        <div style={{ display: 'inline-block', float: 'right' }}>
          <div>
            <Button style={{ width: '100px' }} variant="contained">
              Profile
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
