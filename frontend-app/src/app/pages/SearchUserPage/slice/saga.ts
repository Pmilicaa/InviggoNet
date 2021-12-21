import { takeEvery, takeLatest, call, put, select, all } from 'redux-saga/effects';
import { searchPageAction } from '.';
import { request } from 'utils/request';
import { selectSearchText } from './selectors';
import { UserSearchDTO } from 'types/models/UserSearchDTO';
import { sendFriendRequest } from 'app/services/UserService';

export function* searchUsers() {
  const searchText: string = yield select(selectSearchText);
  const users: UserSearchDTO[] = yield call(request, '/api/users/search?search=' + searchText);
  yield put(searchPageAction.changeResult(users));
}

export function* addFriend(action) {
  const senderId = action.payload[0];
  const reciverId = action.payload[1];
  const succ = yield call(sendFriendRequest, senderId, reciverId);
  console.log();
  yield put(searchPageAction.changeType(reciverId));


}

function* watchSearch() {

  yield takeLatest(searchPageAction.search.type, searchUsers);
}

function* watchReq() {
  yield takeLatest(searchPageAction.addFriend.type, addFriend);
}

// Root saga
export function* searchSaga() {
  // if necessary, start multiple sagas at once with `all`
  yield takeEvery(searchPageAction.search.type, searchUsers);
  yield takeEvery(searchPageAction.addFriend.type, addFriend);
}