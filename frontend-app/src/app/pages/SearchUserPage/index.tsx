import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { User } from '../../components/User'
import { selectSearchResult, selectSearchText } from './slice/selectors'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useSearchPageSlice } from './slice'

export function SearchUserPage() {


  const searchResult = useSelector(selectSearchResult);
  const searchText = useSelector(selectSearchText);
  
  const location = useLocation();

  const dispatch = useDispatch();

  const { actions } = useSearchPageSlice();

  useEffect(() => {
    const searchText = location.search.substring(1);
    dispatch(actions.search(searchText));
  }, [searchText])

  return (
    <>
      <Helmet>
        <title>User result</title>
        <meta name="description" content="Result of search" />
      </Helmet>
      <div className='container'>
        <h3>Search result</h3>
        <div>
          {searchResult ?

            searchResult.length === 0 ? <h4>Nema rezultata</h4> :

              searchResult.map((user) => (
                <User user={user} addFriend={() => {

                }} />
              )) : <></>
          }
        </div>
      </div>
    </>
  );
}
