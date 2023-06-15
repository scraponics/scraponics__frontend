import React from 'react';

import classes from './MenuItem.module.css';

const MenuItem = ({onClick, label}) => {
  return (
    <div className={classes.menuItem} onClick={onclick}>
        {label}
    </div>
  )
}

export default MenuItem