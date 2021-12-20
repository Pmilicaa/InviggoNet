import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { UserRequest } from '../../components/UserRequest';
import { useEffect } from 'react';
import { selectRequests } from './slice/selectors';
import { useFriendRequestSlice } from './slice';
import { User } from 'app/components/User';

export function FriendRequestsPage() {
  const requests = useSelector(selectRequests);

  const { actions } = useFriendRequestSlice();

  const dispatch = useDispatch();

  const declineRequest = (friendshipId: number) => {
    dispatch(actions.declineRequest(friendshipId));
  }
  const acceptRequest = (friendshipId: number) => {
    dispatch(actions.acceptRequest(friendshipId));
  }

  useEffect(() => {
    dispatch(actions.getRequests(2));
  }, []);

  return (
    <>
      <Helmet>
        <title>User result</title>
        <meta name="description" content="Friend requests" />
      </Helmet>
      <div className="container">
        <h3>Friend requests</h3>
        <div>
          {!requests || requests.length === 0 ?
            <h4>Nema rezultata</h4>
            : (
              requests.map(req => (
                !req.accepted ?
                  <UserRequest user={req.sender}
                    acceptRequest={() => {
                      acceptRequest(req.id);
                    }}
                    declineRequest={() => {
                      declineRequest(req.id);
                    }} /> :
                  <User user={req.sender} addFriend={undefined} />
              )
              )
            )}
        </div>
      </div>
    </>
  );
}
