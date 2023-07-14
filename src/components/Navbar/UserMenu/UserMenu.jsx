import React, { useCallback, useState } from 'react';

import Avatar from '../Avatar/Avatar';
import MenuItem from '../MenuItem/MenuItem';

import { AiOutlineMenu } from 'react-icons/ai';
import { LuSun } from 'react-icons/lu';

import classes from './UserMenu.module.css';
import { Link } from 'react-router-dom';

const UserMenu = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);


  const toggleLogin = useCallback(() => {
    setIsLoginOpen((value) => !value);
  }, []);


  const toggleSignup = useCallback(() => {
    setIsSignupOpen((value) => !value);
  }, []);

  return (
    <div className={classes.usermenu}>
      <div className={classes.level}>
        <div className={classes.item1} onClick={() => { console.log("hellow world!") }}>
          {/* hellow */}
          <LuSun />
        </div>
        <div className={classes.item2} onClick={toggleOpen}>
          <AiOutlineMenu />
          <div className={classes.imageContainer}>
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={classes.dropdown}>

          <div className={classes.dropdownContent}>
            <>
              {!isSignupOpen &&
                <div onClick={toggleLogin}>
                  <MenuItem label="Log In" />
                  {isLoginOpen && (
                    <div>
                      <Link to='/logininduser' style={{
                        textDecoration: "none",
                        color: "#111",
                      }}>
                        <MenuItem label="individual" />
                      </Link>
                      <Link to='/loginorg' style={{
                        textDecoration: "none",
                        color: "#111",
                      }}>
                        <MenuItem label="organisation" />
                      </Link>
                      <Link to='/loginvendor' style={{
                        textDecoration: "none",
                        color: "#111",
                      }}>
                        <MenuItem label="vendor" />
                      </Link>
                    </div>
                  )}
                </div>
              }
              {!isLoginOpen &&
                <div onClick={toggleSignup}>
                  <MenuItem label="Sign Up" />
                  {isSignupOpen && (
                    <div>
                      <Link to='/signupinduser' style={{
                        textDecoration: "none",
                        color: "#111",
                      }}>
                        <MenuItem label="individual" />
                      </Link>
                      <Link to='/signuporg' style={{
                        textDecoration: "none",
                        color: "#111",
                      }}>
                        <MenuItem label="Organisaction" />
                      </Link>
                      <Link to='/signupvendor' style={{
                        textDecoration: "none",
                        color: "#111",
                      }}>
                        <MenuItem label="Vendor" />
                      </Link>
                    </div>
                  )}
                </div>
              }
            </>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu