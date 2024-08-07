import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => {
        console.log(r);
        return r.json();
      })
      .then((json) => {
        console.log(json);
      });
  }

  function getUsername({ target }) {
    setUsername(target.value);
  }
  function getPassword({ target }) {
    setPassword(target.value);
  }

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={getUsername} />
        <input type="text" value={password} onChange={getPassword} />
        <button>Entrar</button>
      </form>
      <Link to="/login/criar">Criar</Link>
    </div>
  );
};

export default LoginForm;
