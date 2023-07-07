import React from 'react';
import homeimage from '../../assets/homeimage.png';
// styles
import classes from './CanvaImage.module.css';

const CanvaImage = () => {
  return (
    <div className={classes.canvaimage}>
      <div className={classes.imgcontainer}>
          <img className={classes.homeimage} src={homeimage} alt="home-image" />
      </div>
        
    </div>
  )
}

export default CanvaImage