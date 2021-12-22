import { login, logout, checkLogin } from 'app/services/AuthService';
import { call, put, takeEvery } from 'redux-saga/effects';
import { User } from 'types/models/User';
import { currentUserAction } from '.';
import { getCurrent } from '../../../services/UserService';

export function* getCurrentUser() {
  try {
    if (!checkLogin()) return;
    const user: User = yield call(getCurrent);
    yield put(currentUserAction.changeUser(user));
  } catch (error) {}
}

export function* handleLogin(action) {
  const { username, password } = action.payload;

  yield call(login, username, password);
  const user: User = yield call(getCurrent);
  yield put(currentUserAction.changeUser(user));
}

export function* handleLogout(action) {
  yield call(logout);
}

// Root saga
export function* currentUserSaga() {
  // if necessary, start multiple sagas at once with `all`
  yield takeEvery(currentUserAction.getUser.type, getCurrentUser);
  yield takeEvery(currentUserAction.login.type, handleLogin);
  yield takeEvery(currentUserAction.logout.type, handleLogout);
}
