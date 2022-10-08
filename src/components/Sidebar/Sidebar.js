import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import classes from "./Sidebar.module.css";
import SidebarOption from "./SidebarOption";
import db from "../../firebase";
import { useSelector } from "react-redux";
function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [toggleChannel, setToggleChannel] = useState(true);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
  }, []);

  const toggleChannelHanadler = () => {
    setToggleChannel(!toggleChannel);
  };
  console.log(toggleChannel);
  return (
    <div className={classes.sidebar}>
      <div className={classes["sidebar__header"]}>
        <div className={classes["sidebar__info"]}>
          <h2>Final Project</h2>
          <h3>
            <FiberManualRecord className={classes.online} />
            {user?.displayName}
          </h3>
        </div>
        <Create className={classes["sidebar__createIcon"]} />
      </div>
      <SidebarOption Icon={InsertComment} title="Comment" />
      <SidebarOption Icon={Inbox} title="Mentions & Reactions" />
      <SidebarOption Icon={Drafts} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel Browser" />
      <SidebarOption Icon={PeopleAlt} title="People and User Groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File Browser" />
      <SidebarOption Icon={ExpandLess} title="Inbox" />
      <hr />
      <SidebarOption
        Icon={ExpandMore}
        title="Channels"
        onToggle={toggleChannelHanadler}
      />
      <hr />
      <SidebarOption Icon={Add} addChannelOption title="Add Channels" />
      {toggleChannel === true &&
        channels.map((channel) => (
          <SidebarOption
            title={channel.name}
            id={channel.id}
            Icon={false}
            key={channel.id}
          />
        ))}
    </div>
  );
}

export default Sidebar;
