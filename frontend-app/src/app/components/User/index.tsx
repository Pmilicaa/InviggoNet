import { Button } from '@mui/material'

export const User = ({ user, addFriend }) => {
    return (
        <div className="cart">
            <div style={{ display: 'inline-block' }}>
                <h4>Username: {user.username}</h4>
                <p>First name: {user.firstName}</p>
                <p>Last name: {user.lastName}</p>
            </div>
            {
                addFriend ?
                    <div style={{ display: 'inline-block', float: 'right' }} >
                        <Button onClick={addFriend} variant="contained">Add friend</Button>
                    </div>
                    : <></>
            }
        </div>
    )
}