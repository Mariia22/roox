import React, { ChangeEvent } from 'react';

interface InputType {
  labelName: string,
  name: string,
  type: string,
  value: string,
  required: boolean,
  disabled: boolean,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputType> = ({ labelName, name, type, required, value, disabled, onChange }) => {
  return (
    <label>{labelName}
      <input name={name} type={type} required={required} value={value} disabled={disabled} onChange={e => { onChange(e) }} />
    </label>
  );
};