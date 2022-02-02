import React from 'react';

interface InputType {
  name: string,
  type: string,
  value: string,
  required: boolean,
  disabled: boolean
}

export const Input: React.FC<InputType> = ({ name, type, required, value, disabled }) => {

  return (
    <label>{name}
      <input type={type} required={required} value={value} disabled={disabled} onChange={() => { console.log(value) }} />
    </label>
  );
};