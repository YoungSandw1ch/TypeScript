import React, {useState} from 'react';
import './App.css';
import { User } from './interfaces/interfaces';

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = () => setUser({
    username: 'Doc',
    age: 16,
    coutry: 'Ukraine',
    adress: {
      street: 'Peace st.',
      house: 11,
    },
    admin: false,
  })

  return (
    <>
      <button onClick={fetchUser}>Fetch user</button>
      {user && <p>{`Welcome ${user.username}`}</p>}
    </>
  );
}