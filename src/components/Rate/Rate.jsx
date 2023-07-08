import React, { useState } from 'react';

import { IoIosArrowDropdown } from 'react-icons/io';
import { CgSearch } from 'react-icons/cg';
import jsonData from '../../assets/scarpData/scrapData.json';
import image from './../../assets/placeholder.jpg';

// styles
import classes from './Rate.module.css';

const Rate = () => {
    const [query, setQuery] = useState('');

    const [categoryFilters, setCategoryFilters] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            // Add the selected category to the filters array
            setCategoryFilters([...categoryFilters, value]);
        } else {
            // Remove the deselected category from the filters array
            setCategoryFilters(categoryFilters.filter((category) => category !== value));
        }
    };

    // Filter the JSON data based on the selected categories
    const filteredData = jsonData.filter((item) =>
        categoryFilters.includes(item.category)
    );

    const handleChange = (e) => {
        setQuery(e.target.value);
    }


    return (
        <div className={classes.ratePadding}>
            <div className={classes.rateContainer}>
                <aside className={classes.asideContainer}>
                    <div className={classes.stickyContainer}>
                        <div className={classes.categoryContainer}>
                            <p className={classes.categoryTitle}>Scrap Categories</p>
                            <div className={classes.categoryContent}>
                                <input
                                    type="checkbox"
                                    value="Consumer Electronics"
                                    checked={categoryFilters.includes('Consumer Electronics')}
                                    onChange={handleCheckboxChange}
                                />
                                <p className={classes.subtitle}>Consumer Electronics</p>
                            </div>
                            <div className={classes.categoryContent}>
                                <input
                                    type="checkbox"
                                    value="IT"
                                    checked={categoryFilters.includes('IT')}
                                    onChange={handleCheckboxChange}
                                />
                                <p className={classes.subtitle}>IT</p>
                            </div>
                            <div className={classes.categoryContent}>
                                <input
                                    type="checkbox"
                                    value="Office Equipment"
                                    checked={categoryFilters.includes('Office Equipment')}
                                    onChange={handleCheckboxChange}
                                />
                                <p className={classes.subtitle}>Office Equipment</p>
                            </div>
                            <div className={classes.categoryContent}>
                                <input
                                    type="checkbox"
                                    value="Home Appliances"
                                    checked={categoryFilters.includes('Home Appliances')}
                                    onChange={handleCheckboxChange}
                                />
                                <p className={classes.subtitle}>Home Appliances</p>
                            </div>
                        </div>
                    </div>
                </aside>

                <section className={classes.cardContainer}>
                    <div className={classes.searchContainer}>
                        <form className={classes.form} onSubmit={() => { }}>
                            {/* user query */}
                            <input
                                type="text"
                                className={classes.searchQuery}
                                name='search'
                                placeholder='Search...'
                                value={query}
                                onChange={handleChange}
                                autoComplete='on'
                            />
                            {/* submit query */}
                            <button className={classes.querySubmit} type='submit'>
                                <CgSearch className={classes.iconQuery} />
                            </button>
                        </form>
                    </div>
                    <div className={classes.heading}>
                        <p>{filteredData.length} results</p>

                        <div className={classes.sortContainer}>
                            <p>Sort By :</p>
                            <div>
                                <p>price</p>
                                <IoIosArrowDropdown className={classes.icon} />
                            </div>
                        </div>

                    </div>

                    <div className={classes.productContainer}>
                        {!filteredData.length && (
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '50vh',
                                width: '100%'
                            }}>
                                <h1>No Items to Show</h1>
                            </div>
                        )}
                        {filteredData.map((item, index) => (
                            <div key={index} className={classes.card}>
                                <div className={classes.imgContainer}>
                                    <img src={image} alt={item.name} />
                                </div>
                                <div className={classes.descContainer}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignContent: 'center',
                                        margin: '0'
                                    }}>
                                        <p className={classes.name}>{item.name}</p>
                                        <p className={classes.price}>{item.price}</p>
                                    </div>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Rate