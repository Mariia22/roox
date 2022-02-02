import React, { useContext } from 'react';
import { User } from '../../components/User/User';
import { UserType } from '../../types/user';
import { UsersContext } from '../../App';

export const UserList: React.FC = () => {
  const items: Array<UserType> = useContext(UsersContext);

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


