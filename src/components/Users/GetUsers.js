import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch } from './actions';

function GetUsers() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  return (
    <div className="App">
      <button className="button" onClick={() => dispatch(getUsersFetch())}>
        Get Users:
      </button>
      <div>
        {users.map((user) => (
          <div className="users" key={user.id}>
            {user.name} Telephone : {user.phone}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetUsers;
