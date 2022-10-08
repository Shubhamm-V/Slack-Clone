import React from 'react'
import classes from './Header.module.css';
import { Avatar } from '@mui/material';
import { AccessTime, Help } from '@mui/icons-material';
import { Search } from '@mui/icons-material';
import { useSelector } from 'react-redux';
function Header() {
  const user = useSelector(state=>state.user)
  return (
    <div className={classes.header}>
        <div className={classes['header__left']}>
            {/* Avatar */}
            <Avatar
                className={`${classes['avatar__icon']} ${classes['header__icon']}`}
                alt = {user?.displayName}
                src = {user?.photoURL}
            />
            {/* Time Icon */}
            <AccessTime className={classes['time__icon']}/>
        </div>
        <div className={classes['header__search']}>
            {/* Search Input */}
            <Search/>   
            <input placeholder='Enter Upcoming Projects'/>
        </div>
        <div className={classes['header__right']}>
            {/* Help */}
            <Help className = {classes['help__icon']}/>
        </div>  

    </div>
  )
}

export default Header

