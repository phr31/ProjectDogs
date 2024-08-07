import React, { useState } from 'react';
import URL from './URL';

const PhotoGet = () => {
  const [query, setQuery] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch(`${URL}/api/photo/${query}`)
      .then((r) => {
        console.log(r);
        return r.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }
  function handleGetQuery({ target }) {
    setQuery(target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder=""
        value={query}
        onChange={handleGetQuery}
      />
      <button>Enviar</button>
    </form>
  );
};

export default PhotoGet;
