import React from 'react';

import Container from '../Container/Container';
import Logo from './Logo/Logo';
import NavItems from './NavItems/NavItems';
import UserMenu from './UserMenu/UserMenu';

// styles
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={classes.level1}>
      <div className={classes.level2}>

        <Container>
          <div className={classes.container}>

            <Logo />
            <NavItems />
            <UserMenu />

          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar;