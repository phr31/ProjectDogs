import React, { useState } from 'react';
import URL from './URL';

const UserPost = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`${URL}/api/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    })
      .then((r) => {
        console.log(r);
        return r.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }
  function handleGetUsername({ target }) {
    setUsername(target.value);
  }
  function handleGetPassword({ target }) {
    setPassword(target.value);
  }
  function handleGetEmail({ target }) {
    setEmail(target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleGetUsername}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={handleGetPassword}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={handleGetEmail}
      />
      <button>Enviar</button>
    </form>
  );
};

export default UserPost;
