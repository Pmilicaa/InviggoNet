import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { User } from '../../components/User';
import { selectSearchResult, selectSearchText } from './slice/selectors';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSearchPageSlice } from './slice';
import { SearchParam } from './slice/types';
import { sendFriendRequest } from 'app/services/UserService';

export function SearchUserPage() {
  const searchResult = useSelector(selectSearchResult);

  const dispatch = useDispatch();

  const { actions } = useSearchPageSlice();

  const { search } = useParams<SearchParam>();

  useEffect(() => {
    dispatch(actions.search(search));
  }, [search]);


  const handleAdd = (senderId: number, reciverId: number) => {
    dispatch(actions.addFriend([senderId, reciverId]));
  }
  return (
    <>
      <Helmet>
        <title>User result</title>
        <meta name="description" content="Result of search" />
      </Helmet>
      <div className="container">
        <h3>Search result</h3>
        <div>
          {searchResult ? (
            searchResult.length === 0 ? (
              <h4>Nema rezultata</h4>
            ) : (
              searchResult.map(user => (
                user.friends === null ?
                <User user={user} addFriend={() => {
                  handleAdd(1 ,user.id)
                }} /> 
                : 
                <User user={user} addFriend={undefined} /> 
              ))
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
