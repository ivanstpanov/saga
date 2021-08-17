import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_ALBUMS_FETCH, GET_ALBUMS_SUCCESS } from './albumsActions';

function albumsFetch() {
  return fetch('https://jsonplaceholder.typicode.com/albums').then((response) =>
    response.json(),
  );
}

function* workGetAlbumsFetch() {
  const albums = yield call(albumsFetch);
  yield put({ type: GET_ALBUMS_SUCCESS, albums });
}

function* albumsSaga() {
  yield takeEvery(GET_ALBUMS_FETCH, workGetAlbumsFetch);
}
export default albumsSaga;
