import React, { useState } from 'react';
import URL from './URL';

const PhotoPost = () => {
  const [token, setToken] = useState('');
  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState('');
  const [idade, setIdade] = useState('');
  const [img, setImg] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('peso', peso);
    formData.append('idade', idade);
    formData.append('img', img);
    console.log(formData);

    fetch(`${URL}/api/photo`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
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
  function handleGetToken({ target }) {
    setToken(target.value);
  }
  function handleGetNome({ target }) {
    setNome(target.value);
  }
  function handleGetPeso({ target }) {
    setPeso(target.value);
  }
  function handleGetIdade({ target }) {
    setIdade(target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Token"
        value={token}
        onChange={handleGetToken}
      />
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={handleGetNome}
      />
      <input
        type="text"
        placeholder="Peso"
        value={peso}
        onChange={handleGetPeso}
      />
      <input
        type="text"
        placeholder="Idade"
        value={idade}
        onChange={handleGetIdade}
      />
      <input type="file" onChange={({ target }) => setImg(target.files[0])} />
      <button>Enviar</button>
    </form>
  );
};

export default PhotoPost;
