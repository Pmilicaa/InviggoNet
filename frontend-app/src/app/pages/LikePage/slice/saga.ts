import { call, put } from '@redux-saga/core/effects';
import { getAllUserLikes } from 'app/services/LikeService';
import { currentLike } from '.';

export function* getUserLikes(action) {
  try {
    const { postId, userId } = action.payload;

    const userLikes = yield call(getAllUserLikes, postId, userId);
    yield put(currentLike.getUserLikes(userLikes));
  } catch (error) {
    console.log(error);
  }
}
export function* like() {}
export function* unlike() {}
