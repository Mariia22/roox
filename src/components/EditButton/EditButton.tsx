import React from 'react';

interface EditType {
  setDisabledForm: () => void
}

export const EditButton: React.FC<EditType> = ({ setDisabledForm }) => {

  return (
    <button onClick={() => { setDisabledForm() }}>Редактировать</button>
  );
};