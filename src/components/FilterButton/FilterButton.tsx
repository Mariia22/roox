import React from 'react'
import styles from './FilterButton.module.scss'

interface Props {
  text: string,
  filter: string,
  sort: (filter: string) => void
}

export const FilterButton: React.FC<Props> = ({ text, filter, sort }) => {
  return (
    <button className={styles.filterButton} onClick={() => sort(filter)}>{text}</button>
  )
}