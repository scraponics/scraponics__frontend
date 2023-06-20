import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import search from "../../assets/search-1.png";
import dropicon from "../../assets/dropdown.png";
import Card from '../Card/Card'
import Card2 from '../Card2/Card2'

// Css
import classes from "../Rateus/Rateus.module.css";
import { Widgets } from "@mui/icons-material";

function Rateus() {
  const [query, setQuery] = useState("");
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.dropdown}>
        <div
          className={classes.dropdownbtn}
          onClick={(e) => setIsActive(!isActive)}
        >
          Select Item
          <img src={dropicon} alt="Dropdown" />
        </div>
        {isActive && (
          <div className={classes.dropdowncontent}>
            <div className={classes.dropdownitem}>
              <a href="##">Phones</a>
            </div>
            <div className={classes.dropdownitem}>
              <a href="##">Laptops</a>
            </div>
            <div className={classes.dropdownitem}>
              <a href="##">Household gadgets</a>
            </div>
            <div className={classes.dropdownitem}>
              <a href="##">AC</a>
            </div>
            <div className={classes.dropdownitem}>
              <a href="##">Motor drives</a>
            </div>
          </div>
        )}
      </div>
      <input
        type="text"
        placeholder="Enter your Product Name "
        onClick={(e) => setQuery(e.target.value)}
      ></input>
      <label>
        <img src={search} alt="Search Icon" style={{ width: 30, height: 20 }} />
        Search
      </label>
    </div>
  );
}

export default Rateus;
