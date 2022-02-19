import React from 'react'
import s from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className='item'>
        <a href='#s'>Profile</a>
      </div>
      <div className='item'>
        <a href='#s'>Messages</a>
      </div>
      <div className='item'>
        <a href='#s'>News</a>
      </div>
      <div className='item'>
        <a href='#s'>Music</a>
      </div>
      <div className='item'>
        <a href='#s'>Settings</a>
      </div>
    </nav>
  )
}

export default Navbar