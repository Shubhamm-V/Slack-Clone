import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../firebase";
import classes from "./Chat.module.css";
import ChatInput from "./ChatInput";
import Message from "./Message";
function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot( (snapshot) => 
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);
      return (
    <div className={classes.chat}>
      <div className={classes["chat__header"]}>
        <div className="chat__headerLeft">
          <h4 className={classes["chat__channelName"]}>
            <strong> # {roomDetails?.name || roomId}  </strong>
            <StarBorderOutlined className={classes["chat__starBorder"]} />
          </h4>
        </div>
        <div className={classes["chat__headerRight"]}>
          <p>
            <InfoOutlined className={classes["chat__info"]} /> Details
          </p>
        </div>
      </div>

      <div className={classes['chat__messages']}>
        {roomMessages.length===0 && <h4>No Messages Yet...</h4>}
        {/* Messages */}
        {
            roomMessages.map((message)=>(
                <Message 
                    key = {message}
                    message = {message.message}
                    timestamp = {message.timestamp}
                    user = {message.user}
                    userImage = {message.userimage}
                />
            ))
        }
      </div>
        <ChatInput channelName = {roomDetails?.name} channelId = {roomId}/>
    </div>
  );
}

export default Chat;
    