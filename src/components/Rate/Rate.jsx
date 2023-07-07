import React from "react";

import { IoIosArrowDropdown } from "react-icons/io";
import { BiCheckbox } from "react-icons/bi";

import camera from "../../assets/camera.jpg";
import Cardreader from "../../assets/CardReader.png";
import earbud from "../../assets/earbud.jpg";
import headphone from "../../assets/headphone.jpg";
import induction from "../../assets/Induction.jpg";
import iphone from "../../assets/iphone.jpg";
import mac from "../../assets/macbook.jpg";
import refractometer from "../../assets/Refractometer.jpg";
import ac from "../../assets/AC.png";
import mouse from "../../assets/MouseGaming.jpg";
import speaker from "../../assets/Speaker.jpg";
import Gkeyboard from "../../assets/keyboardGaming.jpg";

// styles
import classes from "./Rate.module.css";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

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
                <p className={classes.subtitle}>Domestic</p>
              </div>
              <div className={classes.categoryContent}>
                <BiCheckbox className={classes.icon} />
                <p className={classes.subtitle}>Office</p>
              </div>
              <div className={classes.categoryContent}>
                <BiCheckbox className={classes.icon} />
                <p className={classes.subtitle}>Industry</p>
              </div>
              <div className={classes.categoryContent}>
                <BiCheckbox className={classes.icon} />
                <p className={classes.subtitle}>Shop</p>
              </div>
              <div className={classes.categoryContent}>
                <BiCheckbox className={classes.icon} />
                <p className={classes.subtitle}>Health</p>
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
                <img src={camera} alt="rate" />
              </div>
              <div className={classes.descContainer}>
                <p className={classes.price}>₹20,000</p>
                <p>Old DSLR of Nikon which is 1 year used.</p>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.imgContainer}>
                <img src={Cardreader} alt="rate" />
              </div>
              <div className={classes.descContainer}>
                <p className={classes.price}>₹2000</p>
                <p>Card Reader for accessing Debit Card.</p>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.imgContainer}>
                <img src={earbud} alt="rate" />
              </div>
              <div className={classes.descContainer}>
                <p className={classes.price}>₹5000</p>
                <p>Bose Earbud which is 3 years old.</p>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.imgContainer}>
                <img src={headphone} alt="rate" />
              </div>
              <div className={classes.descContainer}>
                <p className={classes.price}>₹2000</p>
                <p>Bose Headphone which is 8 years old.</p>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.imgContainer}>
                <img src={mac} alt="rate" />
              </div>
              <div className={classes.descContainer}>
                <p className={classes.price}>₹40,000</p>
                <p>Old Macbook Air 13, all condition good.</p>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.imgContainer}>
                <img src={mouse} alt="rate" />
              </div>
              <div className={classes.descContainer}>
                <p className={classes.price}>₹300</p>
                <p>6 Month old gaming Mouse.</p>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.imgContainer}>
                <img src={ac} alt="rate" />
              </div>
              <div className={classes.descContainer}>
                <p className={classes.price}>₹25,000</p>
                <p>4 Years old Air Conditioner.</p>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.imgContainer}>
                <img src={iphone} alt="rate" />
              </div>
              <div className={classes.descContainer}>
                <p className={classes.price}>₹12,000</p>
                <p>2 years old Iphone.</p>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.imgContainer}>
                <img src={refractometer} alt="rate" />
              </div>
              <div className={classes.descContainer}>
                <p className={classes.price}>₹50,000</p>
                <p>1 year old Refractometer, all condition good.</p>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.imgContainer}>
                <img src={induction} alt="rate" />
              </div>
              <div className={classes.descContainer}>
                <p className={classes.price}>₹3000</p>
                <p>5 months old Induction.</p>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.imgContainer}>
                <img src={speaker} alt="rate" />
              </div>
              <div className={classes.descContainer}>
                <p className={classes.price}>₹1200</p>
                <p>10 years Bose old Speaker.</p>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.imgContainer}>
                <img src={Gkeyboard} alt="rate" />
              </div>
              <div className={classes.descContainer}>
                <p className={classes.price}>₹200</p>
                <p>4 years old Gaming Keyboard with proper condition.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Rate;
