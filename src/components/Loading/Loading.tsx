import React from 'react'
import preload from './../../images/loading.webp';
import style from './Loading.module.scss';


export const Loading: React.FC = () => {

  return (
    <div>
      <div className={style.loading}><img src={preload} alt='loading' /></div>
    </div>
  )
}