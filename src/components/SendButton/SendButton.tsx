import React from 'react'
import styles from './SendButton.module.scss'

interface SubmitType {
  disabled: boolean
}
export const SendButton: React.FC<SubmitType> = ({ disabled }) => {
  return (
    <button className={styles.sendButton} type="submit" disabled={disabled}>Отправить</button>
  );
};