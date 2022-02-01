import React from 'react';

interface Props {
  key: number,
  name: string,
  city: string,
  company: string,
}

export const User: React.FC<Props> = ({ name, city, company }) => {

  return (
    <div>
      <ul>
        <li><span>ФИО:</span>{name}</li>
        <li><span>город:</span>{city}</li>
        <li><span>компания:</span>{company}</li>
      </ul>
      <a>Подробнее</a>
    </div>
  )
}

