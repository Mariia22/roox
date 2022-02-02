import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  key: number,
  id: number,
  name: string,
  city: string,
  company: string,
}

export const User: React.FC<Props> = ({ id, name, city, company }) => {
  return (
    <div>
      <ul>
        <li><span>ФИО:</span>{name}</li>
        <li><span>город:</span>{city}</li>
        <li><span>компания:</span>{company}</li>
      </ul>
      <Link to={`/user/${id}`}>Подробнее</Link>
    </div >
  )
}

