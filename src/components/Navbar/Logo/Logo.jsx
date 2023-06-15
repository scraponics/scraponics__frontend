import React from 'react';

import logo from '../../../assets/logo.png';

// styles
import classes from './Logo.module.css';

const Logo = () => {
  return (
    <img className={classes.logo} src={logo} alt="scraponics" />
  )
}

export default Logo