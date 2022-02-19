import React from 'react'
import s from './Post.module.scss'

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://cdn-icons-png.flaticon.com/128/64/64572.png" alt="" />
        <p>
          {props.message}
        </p>
      </div>
      <div className='postactions'>
        <span className='like'><img src='https://cdn-icons-png.flaticon.com/128/535/535234.png' alt='Like' />{props.likecounts}</span>
        <span><img src="https://cdn-icons-png.flaticon.com/128/6902/6902047.png" alt="Dislike" />{props.dislikes}</span>
        <span><img src="https://cdn-icons.flaticon.com/png/128/5562/premium/5562626.png?token=exp=1645276807~hmac=3a04deb5a56255f138561b86a7197775" alt="Answer" /></span>
      </div>
    </div>
  )
}

export default Post