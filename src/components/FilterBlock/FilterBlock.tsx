import React from 'react';
import { FilterButton } from '../FilterButton/FilterButton';

interface Props {
  sort: (filter: string) => void
}

export const FilterBlock: React.FC<Props> = ({ sort }) => {
  const filtersName = [{ name: 'по городу', filter: 'city' }, { name: 'по компании', filter: 'company' }];
  return (
    <aside>
      <h2>Сортировка</h2>
      {filtersName.map((name, index) => (<FilterButton key={index} text={name.name} filter={name.filter} sort={sort} />))}
    </aside>
  )
}
