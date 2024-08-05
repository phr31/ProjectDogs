import React, { useState } from 'react';
import URL from './URL';

const TokenPost = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`${URL}/jwt-auth/v1/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((r) => {
        console.log(r);
        r.json;
      })
      .then((json) => {
        console.log(json);
        setToken(json.token);
        return json;
      });
  }
  function handleGetUsername({ target }) {
    setUsername(target.value);
  }
  function handleGetPassword({ target }) {
    setPassword(target.value);
  }
  function handleGetToken({ target }) {
    setToken(target.value);
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
      <button>Enviar</button>
      <p style={{wordBreak:'break-all'}}>{token}</p>
    </form>
  );
};

export default TokenPost;
