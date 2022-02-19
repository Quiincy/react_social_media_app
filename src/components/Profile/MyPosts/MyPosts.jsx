import React from 'react'
import s from './MyPosts.module.scss'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
        My Posts
        <div className={s.makepost}>
          <textarea placeholder='Type smth...' name="Add post" id="" cols="30" rows="3"></textarea>
          <button>Publish</button>
          <button>Remove</button>
          <div >
           <Post message='Hi, how are you?' likecounts='45' dislikes='3' />
           <Post message='It`s my first post' likecounts='25' dislikes='1' />
          </div>
        </div>
      </div>
  )
}

export default MyPosts