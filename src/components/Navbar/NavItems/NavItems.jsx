import React from 'react';

import classes from './NavItems.module.css';

const NavItems = () => {
    return (
        <div className={classes.navitems}>

            <div className={classes.navBox}>

                <div className={classes.item1}>
                    Home
                </div>

                <div className={classes.item2}>
                    About
                </div>
                <div className={classes.item2}>
                    Services
                </div>

                <div className={classes.item2}>
                    Rates
                </div>
                <div className={classes.item2}>
                    Resources
                </div>

            </div>

        </div>
    )
}

export default NavItems