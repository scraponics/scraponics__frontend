import React, { useCallback, useState } from 'react';

import Avatar from '../Avatar/Avatar';
import MenuItem from '../MenuItem/MenuItem';

import { AiOutlineMenu } from 'react-icons/ai';

import classes from './UserMenu.module.css';

const UserMenu = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);


  return (
    <div className={classes.usermenu}>
        <div className={classes.level}>
            <div className={classes.item1} onClick={() => {console.log("hellow world!")}}>
                hellow
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
                <MenuItem onClick={() => {}} label="Login" />
                <MenuItem onClick={() => {}} label="SignUp" />
              </>
            </div>

          </div>
        )}

    </div>
  )
}

export default UserMenu