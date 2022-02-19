import React from 'react'
import s from './Header.module.scss'


const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.subitems}>
        <div><img src='https://cdn-icons-png.flaticon.com/128/1140/1140241.png' alt='' /></div>
        <div><p>Cryptoverse</p></div>
      </div>
    </header>
  )
}

export default Header