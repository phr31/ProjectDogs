import React from 'react'
import styles from '../css/Button.module.css'

const Button = ({name, ...props}) => {
  return (
    <button className={styles.button} {...props}>
      {name}
    </button>
  )
}

export default Button
