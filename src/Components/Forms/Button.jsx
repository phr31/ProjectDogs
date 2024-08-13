import React from 'react';
import styles from '../css/Button.module.css';

const Button = ({ name, icon, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {icon}
      {name}
    </button>
  );
};

export default Button;
