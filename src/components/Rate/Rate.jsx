import React from 'react';

import { IoIosArrowDropdown } from 'react-icons/io';
import { BiCheckbox } from 'react-icons/bi';

import image from '../../assets/rateImage.jpg';

// styles
import classes from './Rate.module.css';

const Rate = () => {
    return (
        <div className={classes.ratePadding}>
            <div className={classes.rateContainer}>
                <aside className={classes.asideContainer}>
                    <div className={classes.stickyContainer}>
                        <p className={classes.filter}>Filter</p>
                        <div className={classes.categoryContainer}>
                            <p className={classes.categoryTitle}>Scrap Categories</p>
                            <div className={classes.categoryContent}>
                                <BiCheckbox className={classes.icon} />
                                <p className={classes.subtitle}>Household</p>
                            </div>
                            <div className={classes.categoryContent}>
                                <BiCheckbox className={classes.icon} />
                                <p className={classes.subtitle}>Household</p>
                            </div>
                            <div className={classes.categoryContent}>
                                <BiCheckbox className={classes.icon} />
                                <p className={classes.subtitle}>Household</p>
                            </div>
                            <div className={classes.categoryContent}>
                                <BiCheckbox className={classes.icon} />
                                <p className={classes.subtitle}>Household</p>
                            </div>
                            <div className={classes.categoryContent}>
                                <BiCheckbox className={classes.icon} />
                                <p className={classes.subtitle}>Household</p>
                            </div>
                        </div>
                    </div>
                </aside>

                <section className={classes.cardContainer}>
                    <div className={classes.heading}>
                        <p>20 results</p>

                        <div className={classes.sortContainer}>
                            <p>Sort By :</p>
                            <div>
                                <p>price</p>
                                <IoIosArrowDropdown className={classes.icon} />
                            </div>
                        </div>

                    </div>

                    <div className={classes.productContainer}>
                        <div className={classes.card}>
                            <div className={classes.imgContainer}>
                                <img src={image} alt="rate" />
                            </div>
                            <div className={classes.descContainer}>
                                <p className={classes.price}>$200</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.imgContainer}>
                                <img src={image} alt="rate" />
                            </div>
                            <div className={classes.descContainer}>
                                <p className={classes.price}>$200</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.imgContainer}>
                                <img src={image} alt="rate" />
                            </div>
                            <div className={classes.descContainer}>
                                <p className={classes.price}>$200</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.imgContainer}>
                                <img src={image} alt="rate" />
                            </div>
                            <div className={classes.descContainer}>
                                <p className={classes.price}>$200</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.imgContainer}>
                                <img src={image} alt="rate" />
                            </div>
                            <div className={classes.descContainer}>
                                <p className={classes.price}>$200</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.imgContainer}>
                                <img src={image} alt="rate" />
                            </div>
                            <div className={classes.descContainer}>
                                <p className={classes.price}>$200</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.imgContainer}>
                                <img src={image} alt="rate" />
                            </div>
                            <div className={classes.descContainer}>
                                <p className={classes.price}>$200</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.imgContainer}>
                                <img src={image} alt="rate" />
                            </div>
                            <div className={classes.descContainer}>
                                <p className={classes.price}>$200</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.imgContainer}>
                                <img src={image} alt="rate" />
                            </div>
                            <div className={classes.descContainer}>
                                <p className={classes.price}>$200</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.imgContainer}>
                                <img src={image} alt="rate" />
                            </div>
                            <div className={classes.descContainer}>
                                <p className={classes.price}>$200</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.imgContainer}>
                                <img src={image} alt="rate" />
                            </div>
                            <div className={classes.descContainer}>
                                <p className={classes.price}>$200</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.imgContainer}>
                                <img src={image} alt="rate" />
                            </div>
                            <div className={classes.descContainer}>
                                <p className={classes.price}>$200</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Rate