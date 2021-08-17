import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_COMMENTS_FETCH, GET_COMMENTS_SUCCESS } from './commentsActions';

function commentsFetch() {
  return fetch('https://jsonplaceholder.typicode.com/comments').then(
    (response) => response.json(),
  );
}

function* workGetCommentsFetch() {
  const comments = yield call(commentsFetch);
  yield put({ type: GET_COMMENTS_SUCCESS, comments });
}

function* commentsSaga() {
  yield takeEvery(GET_COMMENTS_FETCH, workGetCommentsFetch);
}
export default commentsSaga;
