import React from 'react'
import styles from './EditButton.module.scss'

interface EditType {
  setDisabledForm: () => void
}

export const EditButton: React.FC<EditType> = ({ setDisabledForm }) => {

  return (
    <button className={styles.editButton} onClick={() => { setDisabledForm() }}>Редактировать</button>
  );
};