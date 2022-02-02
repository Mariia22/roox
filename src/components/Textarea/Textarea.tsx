import React from 'react';

interface TextareaType {
  name: string
}

export const Textarea: React.FC<TextareaType> = ({ name }) => {
  return (
    <label>{name}<textarea /></label>
  );
};