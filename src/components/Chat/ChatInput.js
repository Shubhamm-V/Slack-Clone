import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import db from '../../firebase';
import classes from './ChatInput.module.css';
import firebase from 'firebase/compat/app';
function ChatInput({channelName,channelId}) {
    const [userInput, setUserInput] = useState('');
    const user = useSelector(state=>state.user)
    const sendMessage = (event) =>{
        event.preventDefault();
        if(channelId){
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: userInput,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userimage: user.photoURL
            })
        }
        setUserInput('');
    }
    const inputHandler = (event) =>{
        setUserInput(event.target.value);
    }
  return (
    <div className={classes.chatInput}>
        <form>
            <input placeholder={`message in #${channelName || channelId}`} onChange = {inputHandler} value = {userInput}/>
            <button type = "submit" onClick = {sendMessage}>SEND</button>
        </form>
    </div>
  )
}

export default ChatInput