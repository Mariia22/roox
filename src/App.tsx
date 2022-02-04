import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserType } from './types/user'
import { getUsers } from './common/api'
import { UserList } from './components/UserList/UserList'
import { FilterBlock } from './components/FilterBlock/FilterBlock'
import { Loading } from './components/Loading/Loading'
import style from './styles/App.module.scss'
import { UserCard } from './components/UserCard/UserCard'

export const UsersContext = React.createContext<Array<UserType>>([]);

function App() {
  const [users, setUsers] = useState<Array<UserType>>([])
  const [isLoading, setLoading] = useState<Boolean>(true)

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data)
      })
      .then(() => setLoading(false))
  }, [])

  const setSort = (filter: string): void => {
    if (filter === 'city') {
      const sortedUsersCity = [...users].sort((a, b) => (a.address.city > b.address.city) ? 1 : -1)
      setUsers(sortedUsersCity)
    }
    else if (filter === 'company') {
      const sortedUsersCompany = [...users].sort((a, b) => (a.company.name > b.company.name) ? 1 : -1)
      setUsers(sortedUsersCompany)
    }
  }

  return (
    <UsersContext.Provider value={users}>
      <Router>
        <div className={style.app_wrapper}>
          <FilterBlock sort={setSort} />
          <Routes>
            <Route path='/' element={isLoading ? <Loading /> : <UserList />} />
            <Route path='/user/:id' element={<UserCard />} />
          </Routes>
        </div>
      </Router>
    </UsersContext.Provider>
  );
}

export default App
