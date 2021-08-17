import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_TODOS_FETCH, GET_TODOS_SUCCESS } from './todosActions';

function todosFetch() {
  return fetch('https://jsonplaceholder.typicode.com/todos').then((response) =>
    response.json(),
  );
}

function* workGetTodosFetch() {
  const todos = yield call(todosFetch);
  yield put({ type: GET_TODOS_SUCCESS, todos });
}

function* sagaTodos() {
  yield takeEvery(GET_TODOS_FETCH, workGetTodosFetch);
}
export default sagaTodos;
