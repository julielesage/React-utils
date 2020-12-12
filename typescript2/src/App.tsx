import React from 'react';
import Header from './Header';
import './styles.css';
import { UserListType } from './types';

function App() {
  const list: UserListType = {
    users: [
      { firstname: "raoul" },
      { firstname: "julie" },
      { firstname: "steven" }
    ],
    userNb: 3
  }
  return (
    <div className="App">
      <ul>{list.users.map(u => <li>{u.firstname}</li>)}</ul>
      <Header title="typescript lesson" />
    </div>
  );
}

export default App;