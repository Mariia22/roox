import React from 'react'
import { Link } from 'react-router-dom'
import styles from './User.module.scss'

interface Props {
  key: number,
  id: number,
  name: string,
  city: string,
  company: string,
}

export const User: React.FC<Props> = ({ id, name, city, company }) => {
  return (
    <div className={styles.user}>
      <div className={styles.userItem}><span className={styles.userHeader}>ФИО:</span>{name}</div>
      <div className={styles.userItem}><span className={styles.userHeader}>город:</span>{city}</div>
      <div className={styles.userLastString}>
      <div className={styles.userItem}><span className={styles.userHeader}>компания:</span>{company}</div>
      <Link className={styles.userLink} to={`/user/${id}`}>Подробнее</Link>
      </div>
    </div >
  )
}

