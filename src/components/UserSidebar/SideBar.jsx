import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import {
  AiFillHome,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { BiBookContent, BiCategory } from "react-icons/bi";
import Userpic from "../../assets/User-logo.png";
import home from "../../assets/Home.png";

// Css
import classes from "../UserSidebar/SideBar.module.css";

function SideBar() {
  const [isClick, setIsClick] = useState(false);

  const toggle = () => setIsClick(!isClick);

  return (
    <>
      <div className={classes.sidebar}>
        <div className={classes.top}>
          <div className={classes.logo}></div>
          <GiHamburgerMenu className={classes.menubtn} onClick={toggle} />
        </div>
        <div className={classes.user}>
          <img src={Userpic} alt="User Photo" className={classes.userimg} />
          <div>
            <p className={classes.bold}>User</p>
            <p>Admin</p>
          </div>
        </div>
        <ul>
          <li>
            <a href="##">
              <AiFillHome className={classes.img} />
              <span className={classes.navitem}>Home</span>
            </a>
            <span className={classes.tooltip}>Home</span>
          </li>
          <li>
            <a href="##">
              <BiBookContent className={classes.img} />
              <span className={classes.navitem}>Products</span>
            </a>
            <span className={classes.tooltip}>Products</span>
          </li>
          <li>
            <a href="##">
              <BiCategory className={classes.img} />
              <span className={classes.navitem}>Category</span>
            </a>
            <span className={classes.tooltip}>Category</span>
          </li>
          <li>
            <a href="##">
              <AiOutlineShoppingCart className={classes.img} />
              <span className={classes.navitem}>Orders</span>
            </a>
            <span className={classes.tooltip}>Orders</span>
          </li>
          <li>
            <a href="##">
              <AiOutlineUser className={classes.img} />
              <span className={classes.navitem}>Customers</span>
            </a>
            <span className={classes.tooltip}>Customers</span>
          </li>
          <li>
            <a href="##">
              <FiSettings className={classes.img} />
              <span className={classes.navitem}>Settings</span>
            </a>
            <span className={classes.tooltip}>Settings</span>
          </li>
          <li>
            <a href="##">
              <FiLogOut className={classes.img} />
              <span className={classes.navitem}>Logout</span>
            </a>
            <span className={classes.tooltip}>Logout</span>
          </li>
        </ul>
      </div>

      <div className={classes.maincontain}>
        <div className={classes.container}>
          <h1>Dashboard</h1>
        </div>
      </div>
    </>
  );
}

export default SideBar;
