import React, { useState } from 'react';

const PhotoGet = () => {
  const [query, setQuery] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch(`${URL}/api/photo/${query}`)
      .then((r) => {
        console.log(r);
        r.json;
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
        placeholder="?_total=1&_page=1&_user=6"
        value={query}
        onChange={handleGetQuery}
      />
      <button>Enviar</button>
    </form>
  );
};

export default PhotoGet;
