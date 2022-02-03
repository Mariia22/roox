import React from 'react'
import styles from './SendButton.module.scss'

export const SendButton: React.FC = () => {
  const isActive = false;
  return (
    <button className={isActive ? styles.sendButton : styles.sendButtonActive} type="submit">Отправить</button>
  );
};