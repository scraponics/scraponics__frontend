import React, { useState } from "react";
import oldlt from "../../assets/old_laptop.jpg";

// Css
import classes from "../Card/Card.module.css";

function Card() {
  return (
    <div>
      <div className={classes.card}>
        <div className={classes.img}>
          <img src={oldlt} alt="Old Laptop" />
        </div>
        <div className={classes.content}>
          <div className={classes.details}>
            <h2>
              Old Laptop
              <br />
              <span>₹5000</span>
            </h2>
            <div className={classes.data}>
              <h3>
                E-Waste
                <br />
                <span>This is macbook air 13. Want this,buy it right now!! Anything you want to know ?</span>
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

export default Card;
