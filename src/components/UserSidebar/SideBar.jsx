import React, {useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { BiBookContent } from "react-icons/bi";
import { BsBook } from "react-icons/bs";

// Css
import classes from "../UserSidebar/SideBar.module.css";

function SideBar() {

  return (
    <>
      <div className={classes.sidebar}>
        <ul>
          <li>
            <a href="##">
              <span className={classes.icon}>
                <AiOutlineHome />
              </span>
              <span className={classes.text}>Home</span>
            </a>
          </li>
          <li>
            <a href="##">
              <span className={classes.icon}>
                <BiBookContent />
              </span>
              <span className={classes.text}>Policiy</span>
            </a>
          </li>
          <li>
            <a href="##">
              <span className={classes.icon}>
                <GiHamburgerMenu />
              </span>
              <span className={classes.text}>List of SPCBs</span>
            </a>
          </li>
          <li>
            <a href="##">
              <span className={classes.icon}>
                <MdOutlinePeopleAlt />
              </span>
              <span className={classes.text}>List of Vendors</span>
            </a>
          </li>
          <li>
            <a href="##">
              <span className={classes.icon}>
                <VscGraph />
              </span>
              <span className={classes.text}> Statistics</span>
            </a>
          </li>
          <li>
            <a href="##">
              <span className={classes.icon}>
                <BsBook />
              </span>
              <span className={classes.text}>Education Materials</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
