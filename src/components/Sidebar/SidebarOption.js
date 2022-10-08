import React from "react";
import { useNavigate } from "react-router-dom";
import db from "../../firebase";
import classes from "./SidebarOption.module.css";
function SidebarOption({ Icon, title, id, addChannelOption ,onToggle}) {
  const navigate = useNavigate();
  const selectChannel = () =>{
    if(id){
      navigate(`/room/${id}`);
    }
    else{
      navigate(`/room/${title}`);
    }
    if(title==='Channels'){
      onToggle();
    }
  }

  const addChannel = () =>{
    const channelName = prompt("Enter the Channel Name");
    if(channelName){
      db.collection('rooms').add({
        name: channelName
      })
    }
  }

  return (
    <div
      className={classes.sidebarOption}
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className={classes["sidebarOption__icon"]} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className={classes["sidebarOption__channel"]}>
          <span className={classes["sidebarOption__hash"]}># </span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
