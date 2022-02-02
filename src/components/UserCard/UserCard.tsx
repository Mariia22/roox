import React, { useContext, useState, useEffect, useReducer, ReducerAction } from 'react'
import { useParams } from 'react-router'
import { UserType } from '../../types/user'
import { UsersContext } from '../../App'
import { EditButton } from '../EditButton/EditButton'
import { SendButton } from '../SendButton/SendButton'
import { Input } from '../Input/Input'
import { Textarea } from '../Textarea/Textarea'
import { Statement } from 'typescript'

export const UserCard: React.FC = () => {
  const items: Array<UserType> = useContext(UsersContext)
  const params = useParams();
  const [user, setUser] = useState<UserType | null>(null)
  const [disabled, toggle] = useReducer((disabled: boolean) => !disabled, true);

  useEffect(() => {
    const currentUser = items.filter(item => item.id === Number(params.id))[0]
    setUser(currentUser);
  }, [])

  return (
    <div>
      <div>
        <h1>Профиль пользователя</h1>
        <EditButton setDisabledForm={toggle} />
      </div>
      {user &&
        <form>
          <Input name='Name' type='text' value={user.name} disabled={disabled} required />
          <Input name='User name' type='text' value={user.username} disabled={disabled} required />
          <Input name='E-mail' type='text' value={user.email} disabled={disabled} required />
          <Input name='Street' type='text' value={user.address.street} disabled={disabled} required />
          <Input name='City' type='text' value={user.address.city} disabled={disabled} required />
          <Input name='Zip code' type='text' value={user.address.zipcode} disabled={disabled} required />
          <Input name='Phone' type='text' value={user.phone} disabled={disabled} required />
          <Input name='Website' type='text' value={user.website} disabled={disabled} required />
          <Textarea name='Comment' />
        </form >
      }
      <SendButton />
    </div>
  )
}
