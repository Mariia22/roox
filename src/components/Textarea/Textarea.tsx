import React, { ChangeEvent } from 'react'
import styles from './Textarea.module.scss'

interface TextareaType {
  name: string,
  labelName: string,
  value: string,
  disabled: boolean,
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const Textarea: React.FC<TextareaType> = ({ labelName, name, value, disabled, onChange }) => {
  return (
    <label className={styles.label}>{labelName}
      <textarea className={styles.textarea} name={name} value={value} disabled={disabled} onChange={e => { onChange(e) }} />
    </label>
  );
};