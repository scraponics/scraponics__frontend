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
                                    <Link to="/servicesuser" style={{
                                        textDecoration: "none",
                                        color: "#111"
                                    }}>
                                        <li>Scrap Sell</li>
                                    </Link>
                                    <Link to="/servicesuser" style={{
                                        textDecoration: "none",
                                        color: "#111"
                                    }}>
                                        <li>Awarness</li>
                                    </Link>
                                    <Link to="/servicesuser" style={{
                                        textDecoration: "none",
                                        color: "#111"
                                    }}>
                                        <li>Donation</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.forVendors}>
                            <p className={classes.dropdownHeading}>For Vendors</p>
                            <div>
                                <ul>
                                <Link to="/servicesvendor" style={{
                                        textDecoration: "none",
                                        color: "#111"
                                    }}>
                                        <li>Scrap Collections</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.forGovt}>
                            <p className={classes.dropdownHeading}>For Govt.</p>
                            <div>
                                <ul>
                                <Link to="/servicesuser" style={{
                                        textDecoration: "none",
                                        color: "#111"
                                    }}>
                                        <li>Policy</li>
                                    </Link>
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
                    <Link to="/resource" style={{
                        textDecoration: "none",
                        color: "#111"
                    }}>
                        Resource
                    </Link>
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