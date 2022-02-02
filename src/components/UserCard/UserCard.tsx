import React from 'react'
import { useParams } from 'react-router'

export const UserCard: React.FC = () => {
  const params = useParams();
  console.log(params);
  return (
    <form>

    </form >
  )
}
