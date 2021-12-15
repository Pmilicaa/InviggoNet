import { Button } from '@mui/material'

export const SearchUser = ({ user }) => {
    return (
        <div className="cart">
            <div style={{display: 'inline-block'}}>
                <h4>Username: {user.username}</h4>
                <p>First name: {user.firstName}</p>
                <p>Last name: {user.lastName}</p>
            </div>
            <div style={{display: 'inline-block', float: 'right'}} >
                <Button  variant="contained">Add friend</Button>
            </div>
        </div>
    )
}