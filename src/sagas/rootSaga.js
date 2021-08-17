import { all, call } from 'redux-saga/effects';
import commentsSaga from '../components/Comments/commentsSaga';
import usersSaga from '../components/Users/usersSaga';
import sagaTodos from '../components/Todos/todosSaga';
import albumsSaga from '../components/Albums/albumsSaga';

function* rootSaga() {
  yield all([
    call(commentsSaga),
    call(usersSaga),
    call(sagaTodos),
    call(albumsSaga),
  ]);
}
export default rootSaga;
