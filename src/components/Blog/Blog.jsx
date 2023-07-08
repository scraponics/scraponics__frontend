import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blogImage from '../../assets/homecard.png';

import newsData from '../../assets/newsData/newsData.json';


// styles 
import classes from './Blog.module.css';

const Blog = () => {
    const [category, setCategory] = useState("Circular Economy and Disposal")
    const filterData = newsData.filter(item => item.Category === category);

    const handleChange = (e) => {
        setCategory(e.target.innerHTML);
    }
    return (
        <>
            <h1 style={{
                textAlign: 'center'
            }}>Latest News</h1>
            <div className={classes.blog}>
                <div className={classes.padding__container}>
                    <div className={classes.flex__container}>
                        <div className={classes.inner__margin__box}>
                            <div className={classes.grid__container}>

                                <section className={classes.section__container}>
                                    <div className={classes.level__1}>
                                        <div className={classes.level__2}>


                                            {/* blog card */}
                                            {filterData.map((data, index) => (
                                            <div key={index} className={classes.card__container}>
                                                <div className={classes.card__margin}>
                                                    <div className={classes.card__flex}>
                                                        <div className={classes.card__content}>
                                                            <div className={classes.card__heading}>
                                                                <h1 style={
                                                                    {
                                                                        color: 'black'
                                                                    }
                                                                }>{data.Title}</h1>
                                                            </div>
                                                            <div className={classes.card__desc}>
                                                                <h4 style={{
                                                                    color: '#ccc',
                                                                    fontWeight: 'lighter'
                                                                }}>{data.Description}</h4>
                                                            </div>
                                                            <Link to={data.Link}>know more</Link>

                                                        </div>
                                                        <img style={{
                                                            width: '150px',
                                                            height: '150px'
                                                        }} src={blogImage} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>

                                <aside className={classes.aside__container}>
                                    <div className={classes.sticky__container}>
                                        <h1 className={classes.heading}>Search By Categories</h1>
                                        <div className={classes.categories}>
                                            <p onClick={handleChange}>Circular Economy and Disposal</p>
                                            <p onClick={handleChange}>Policy and Regulations</p>
                                            <p onClick={handleChange}>E-waste</p>
                                            <p onClick={handleChange}>Right to Repair</p>
                                        </div>
                                    </div>
                                </aside>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Blog;