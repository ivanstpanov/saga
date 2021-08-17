import { GET_TODOS_SUCCESS } from '../components/Todos/todosActions';
const todosReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
      return { ...state, todos: action.todos };
    default:
      return state;
  }
};
export default todosReducer;
