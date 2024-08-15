import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';
import styles from '../css/LoginForm.module.css';
import stylesBtm from '../css/Button.module.css';
import Head from '../Helper/Head';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled name="Carregando..." />
        ) : (
          <Button name="Entrar" />
        )}
        {error && <Error error={error && 'Dados Incorretos!'} />}
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Esqueceu a Senha?
      </Link>
      <div className={styles.cadastro}>
        <h3 className={styles.subtitle}>Cadastre-se</h3>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtm.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
