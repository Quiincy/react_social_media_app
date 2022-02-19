import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.scss'

const Profile = () => {
  return (
    <div className={s.profile}>
      <div>
        <img src="https://c.wallhere.com/photos/bc/f9/nft_cryptoart_smiley_smile_chrome_depth_of_field-1962033.jpg!d" alt="" />
      </div>
      <div>
        ava +  description
      </div>
      <MyPosts />
    </div>

  )
}

export default Profile