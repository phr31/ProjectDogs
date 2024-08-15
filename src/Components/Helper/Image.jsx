import React, { useState } from 'react';
import styles from '../css/Image.module.css';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }
  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoad} alt={alt} className={styles.img} {...props} />
    </div>
  );
};

export default Image;
