import { takeLatest, call, put, select } from 'redux-saga/effects';
import { searchPageAction } from '.';
import { request } from 'utils/request';
import { User } from 'types/models/User';
import { selectSearchText } from './selectors';

export function* searchUsers() {

  const searchText: string = yield select(selectSearchText);
  const users: User[] = yield call(request, '/api/users/search?search=' + searchText)

  yield put(searchPageAction.changeResult(users));

}

// Root saga
export function* searchSaga() {
  // if necessary, start multiple sagas at once with `all`
  yield takeLatest(searchPageAction.search.type, searchUsers);
}