import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './NavItems.module.css';

const NavItems = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
        <div className={classes.navitems}>

            <div className={classes.navBox}>
                <Link to="/" style={{
                    textDecoration: "none",
                    color: "#111"
                }}>
                    <div className={classes.item1}>
                        Home
                    </div>
                </Link>

                <div className={classes.item2} onClick={toggleOpen}>
                    Services
                </div>
                {isOpen && (
                    <div className={classes.dropdown}>
                        <div className={classes.forUsers}>
                            <p className={classes.dropdownHeading}>For Users</p>
                            <div>
                                <ul>
                                    <li>Scrap Sell</li>
                                    <li>Donation</li>
                                    <li>Awarness</li>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.forVendors}>
                            <p className={classes.dropdownHeading}>For Vendors</p>
                            <div>
                                <ul>
                                    <li>Scrap Collections</li>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.forGovt}>
                            <p className={classes.dropdownHeading}>For Vendors</p>
                            <div>
                                <ul>
                                    <li>Scrap Collections</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                <Link to="/rate" style={{
                    textDecoration: "none",
                    color: "#111"
                }}>
                    <div className={classes.item2}>
                        Rates
                    </div>
                </Link>

                <div className={classes.item2}>
                    Resources
                </div>

                <Link to="/dashboardpublic" style={{
                    textDecoration: "none",
                    color: "#111"
                }}>
                    <div className={classes.item2}>
                        Public Dashboard
                    </div>
                </Link>

                <div className={classes.item3}>
                    About
                </div>
            </div>

        </div>
    )
}

export default NavItems