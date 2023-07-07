import React from 'react';
import homeImage from '../../assets/homeImage.png'
// styles
import classes from './CanvaImage.module.css';

const CanvaImage = () => {
  return (
    <div className={classes.canvaimage}>
      <div className={classes.imgcontainer}>
          <img className={classes.homeimage} src={homeImage} alt="home" />
      </div>
        
    </div>
  )
}

export default CanvaImage