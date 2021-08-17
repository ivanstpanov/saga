import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import reducer from './usersReducer';
import commentsReducer from './commentsReducer';
import albumsReducer from './albumsReducer';

const rootReducer = combineReducers({
  users: reducer,
  comments: commentsReducer,
  todos: todosReducer,
  albums: albumsReducer,
});

export default rootReducer;
