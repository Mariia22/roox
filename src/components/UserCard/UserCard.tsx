import React, { useContext, useState, useEffect, useReducer, FormEvent, ChangeEvent } from 'react'
import { useParams } from 'react-router'
import { UserType, ValueFormType } from '../../types/user'
import { UsersContext } from '../../App'
import { EditButton } from '../EditButton/EditButton'
import { SendButton } from '../SendButton/SendButton'
import { Input } from '../Input/Input'
import { Textarea } from '../Textarea/Textarea'

export const UserCard: React.FC = () => {
  const items: Array<UserType> = useContext(UsersContext)
  const params = useParams()
  const [user, setUser] = useState<UserType | null>(null)
  const [disabled, toggle] = useReducer((disabled: boolean) => !disabled, true)
  const [valuesForm, setValues] = useState<ValueFormType>({
    'name': '', 'username': '', 'email': '', 'phone': '',
    'website': '', 'city': '', 'street': '', 'zipcode': '', 'comment': ''
  })

  useEffect(() => {
    const currentUser = items.filter(item => item.id === Number(params.id))[0]
    setUser(currentUser)
  }, [items])

  useEffect(() => {
    if (user) {
      setValues(oldValues => ({
        ...oldValues,
        'name': user.name,
        'username': user.username,
        'email': user.email,
        'phone': user.phone,
        'website': user.website,
        'city': user.address.city,
        'street': user.address.street,
        'zipcode': user.address.zipcode
      }))
    }
  }, [user])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    let json = JSON.stringify(valuesForm)
    console.log(json)
  }

  function handleClick(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const updateValue: ValueFormType = {
      ...valuesForm,
      [e.currentTarget.name]: e.currentTarget.value,
    }
    setValues(updateValue)
  }
  return (
    <div>
      <div>
        <h1>Профиль пользователя</h1>
        <EditButton setDisabledForm={toggle} />
      </div>
      {valuesForm &&
        <form action="#" method="post" onSubmit={e => { handleSubmit(e) }}>
          <Input labelName='Name' name='name' type='text' value={valuesForm.name} disabled={disabled} onChange={handleClick} required={true} />
          <Input labelName='User name' name='username' type='text' value={valuesForm.username} disabled={disabled} onChange={handleClick} required={true} />
          <Input labelName='E-mail' name='email' type='text' value={valuesForm.email} disabled={disabled} onChange={handleClick} required={true} />
          <Input labelName='Street' name='street' type='text' value={valuesForm.street} disabled={disabled} onChange={handleClick} required={true} />
          <Input labelName='City' name='city' type='text' value={valuesForm.city} disabled={disabled} onChange={handleClick} required={true} />
          <Input labelName='Zip code' name='zipcode' type='text' value={valuesForm.zipcode} disabled={disabled} onChange={handleClick} required={true} />
          <Input labelName='Phone' name='phone' type='text' value={valuesForm.phone} disabled={disabled} onChange={handleClick} required={true} />
          <Input labelName='Website' name='website' type='text' value={valuesForm.website} disabled={disabled} onChange={handleClick} required={true} />
          <Textarea labelName='Comment' name='comment' value={valuesForm.comment} disabled={disabled} onChange={handleClick} />
          <SendButton />
        </form >
      }
    </div>
  )
}
