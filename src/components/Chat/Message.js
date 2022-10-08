import React from 'react'
import classes from './Message.module.css';
function Message({userImage,user,message,timestamp}) {
    console.log(userImage)
  return (
    <div className={classes.message}>
        <img src = {userImage} alt = "hello" />
        <div className={classes['message__info']}>
        <h4>
            {user} 
            <span className={classes['message__timestamp']}>
              {new Date(timestamp?.toDate()).toUTCString()}
            </span>
        </h4>
        <p>{message}</p>
        </div>
    </div>
  )
}

export default Message