import React, { useEffect, useState } from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_RESET } from '../../api';
import { useNavigate } from 'react-router-dom';
import Head from '../Helper/Head';
import Error from '../Helper/Error';

const LoginPasswordReset = () => {
  const [login, setLogin] = useState('');
  const [key, setKey] = useState('');
  const password = useForm('password');
  const { loading, error, request } = useFetch();
  const naviagte = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) {
        naviagte('/login');
      }
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) {
      setKey(key);
    }
    if (login) {
      setLogin(login);
    }
  }, []);

  return (
    <>
      <Head title="Resete sua Senha" />
      <h1 className="titulo">Resete sua Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Digite uma Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled name="Resetando..." />
        ) : (
          <Button name="Resetar" />
        )}
      </form>
      {error && <Error error={error} />}
    </>
  );
};

export default LoginPasswordReset;
