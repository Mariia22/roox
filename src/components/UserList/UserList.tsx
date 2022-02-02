import React from 'react';
import { User } from '../../components/User/User';
import { UserType } from '../../types/user';

interface Props {
  items: Array<UserType>
}
export const UserList: React.FC<Props> = ({ items }) => {
  return (
    <div>
      <h1>Список пользователей</h1>
      {items.map((user) => (<User
        key={user.id}
        name={user.name}
        city={user.address.city}
        company={user.company.name}
        id={user.id} />))}
    </div>
  );
};


