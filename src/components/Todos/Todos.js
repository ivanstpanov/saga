import { useDispatch, useSelector } from 'react-redux';
import { getTodosFetch } from './todosActions';

function GetTodos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div className="App">
      <button className="button" onClick={() => dispatch(getTodosFetch())}>
        Get Todos:
      </button>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            {todo.title} : {todo.completed ? 'completed' : 'false'}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetTodos;
