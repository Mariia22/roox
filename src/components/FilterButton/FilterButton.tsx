import React from 'react';

interface Props {
  text: string,
  filter: string,
  sort: (filter: string) => void
}

export const FilterButton: React.FC<Props> = ({ text, filter, sort }) => {
  return (
    <button onClick={() => sort(filter)}>{text}</button>
  )
}