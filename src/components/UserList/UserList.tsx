import React, { useContext } from 'react'
import { User } from '../../components/User/User'
import { UserType } from '../../types/user'
import { UsersContext } from '../../App'
import styles from './UserList.module.scss'

export const UserList: React.FC = () => {
  const items: Array<UserType> = useContext(UsersContext);

  return (
    <div className={styles.userList}>
      <h1 className={styles.userListHeader}>Список пользователей</h1>
      {items.map((user) => (<User
        key={user.id}
        name={user.name}
        city={user.address.city}
        company={user.company.name}
        id={user.id} />))}
      <p className={styles.userListText}>Haйдено 10 пользователей</p>
    </div>
  );
};


