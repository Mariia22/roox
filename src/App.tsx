import React, { useEffect, useState } from 'react';
import { UserType } from './types/user';
import { getUsers } from './api/api';
import { UserList } from './components/UserList/UserList';
import { FilterBlock } from './components/FilterBlock/FilterBlock';
import style from './styles/App.module.scss';

function App() {
  const [users, setUsers] = useState<Array<UserType>>([]);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    })
  }, [])

  const setSort = (filter: string): void => {
    if (filter === 'city') {
      const sortedUsers = users.sort((a, b) => (a.address.city > b.address.city) ? 1 : -1);
      setUsers(sortedUsers);
      console.log(users);
    }
    else if (filter === 'company') {
      const sortedUsers = users.sort((a, b) => (a.company.name > b.company.name) ? 1 : -1);
      setUsers(sortedUsers);
      console.log(users);
    }
  }

  return (
    <div className={style.app_wrapper}>
      <FilterBlock sort={setSort} />
      <UserList items={users} />
    </div>
  );
}

export default App;
