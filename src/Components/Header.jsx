import React from 'react';
import styles from './css/Header.module.css';
import { Link } from 'react-router-dom';
import  Dogs from '../../Assets/dogs.svg?react';

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label='Dogs - Home'>
          <Dogs />
        </Link>
        <Link className={styles.login} to="/login">Login / Criar</Link>
      </nav>
    </div>
  );
};

export default Header;
