import React, { ChangeEvent } from 'react';

interface TextareaType {
  name: string,
  labelName: string,
  value: string,
  disabled: boolean,
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const Textarea: React.FC<TextareaType> = ({ labelName, name, value, disabled, onChange }) => {
  return (
    <label>{labelName}
      <textarea name={name} value={value} disabled={disabled} onChange={e => { onChange(e) }} />
    </label>
  );
};