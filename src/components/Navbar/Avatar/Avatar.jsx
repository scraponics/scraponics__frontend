import React from 'react';

import avatar from '../../../assets/placeholder.jpg';

// styles 
import classes from './Avatar.module.css';

const Avatar = () => {
  return (
    <img className={classes.avatar} src={avatar} alt="placeholder" />
  )
}

export default Avatar