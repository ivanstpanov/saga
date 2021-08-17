import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import GetUsers from '../../components/Users/GetUsers';
import GetComments from '../../components/Comments/GetComments';
import GetTodos from '../../components/Todos/Todos';
import Albums from '../../components/Albums/Albums';

const Home = () => {
  return (
    <HashRouter>
      <div>
        <h1>JSON PLACEHOLDER</h1>
        <ul className="header">
          <li>
            <NavLink to="/todos">Todos</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/comments">Comments</NavLink>
          </li>
          <li>
            <NavLink to="/albums">Albums</NavLink>
          </li>
        </ul>
        <div className="content">
          <Route path="/todos" component={GetTodos} />
          <Route path="/users" component={GetUsers} />
          <Route path="/comments" component={GetComments} />
          <Route path="/albums" component={Albums} />
        </div>
      </div>
    </HashRouter>
  );
};

export default Home;
