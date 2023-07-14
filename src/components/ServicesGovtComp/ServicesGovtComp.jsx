import React from 'react';
import { MdOutlineSell } from 'react-icons/md';
import { VscLayersActive } from 'react-icons/vsc';
import { AiOutlineTeam } from 'react-icons/ai';
import { FiMonitor } from 'react-icons/fi';
// styles
import image from '../../assets/services/user.png';
import classes from './ServicesGovtComp.module.css';

const ServicesGovtComp = () => {
    return (
        <div className={classes.servicePadding}>
            <div className={classes.headingContainer}>
                <p className={classes.heading}>GOVERNMENT</p>
            </div>
            <div className={classes.serviceContainer}>

                <div className={classes.leftContainer}>

                    <div className={classes.card}>
                        <MdOutlineSell className={classes.icon} />
                        <p className={classes.subheading}>Sell E-waste</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, est.</p>
                    </div>
                    <div className={classes.card}>
                        <VscLayersActive className={classes.icon} />
                        <p className={classes.subheading}>Donate E-waste</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, est.</p>
                    </div>
                    <div className={classes.card}>
                        <AiOutlineTeam className={classes.icon} />
                        <p className={classes.subheading}>Get aware</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, est.</p>
                    </div>
                    <div className={classes.card}>
                    <FiMonitor className={classes.icon} />
                        <p className={classes.subheading}>Transparent Platform</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, est.</p>
                    </div>

                </div>

                <div className={classes.rightContainer}>
                    <img className={classes.serviceImage} src={image} alt="service" />
                </div>

            </div>
        </div>
    )
}

export default ServicesGovtComp