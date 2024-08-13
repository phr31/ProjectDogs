import React, { useEffect, useState } from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from '../css/UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/conta':
        setTitle('Minha Conta');
        break;
      case '/conta/estatisticas':
        setTitle('Estatisticas');
        break;
      case '/conta/postar':
        setTitle('Poste Sua Foto');
        break;
      default:
        setTitle('Minha Conta');
        break;
    }
  }, [location]);

  return (
    <div className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </div>
  );
};

export default UserHeader;
