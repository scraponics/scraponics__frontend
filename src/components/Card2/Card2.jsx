import React, { useState } from "react";
import oldiphone from "../../assets/old_iphone.jpg";

// Css
import classes from "../Card/Card.module.css";

function Card2() {
  return (
    <div>
      <div className={classes.card}>
        <div className={classes.img}>
          <img src={oldiphone} alt="Renewed Iphone" />
        </div>
        <div className={classes.content}>
          <div className={classes.details}>
            <h2>
              Renewed Phone
              <br />
              <span>₹2000</span>
            </h2>
            <div className={classes.data}>
              <h3>
                E-Waste
                <br />
                <span>
                  This is Iphone 11. Want this,buy it right now!! Anything
                  you want to know ?
                </span>
              </h3>
            </div>
            <div className={classes.btn}>
              <button>Know More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
