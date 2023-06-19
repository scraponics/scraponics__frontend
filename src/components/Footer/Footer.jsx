import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagramSquare
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import polimg from '../../assets/pollution-control-board.png'
import stakeholderimg from '../../assets/stakeholders.png'

import classes from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer>
        <div className={classes.container}>
          <div className={classes.aboutus}>
            <h1>Scraponics</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              unde veritatis, nihil laboriosam minus voluptate porro omnis, ut
              eius cumque neque temporibus esse inventore mollitia! Fugiat omnis
              quisquam nihil quas debitis quae voluptates similique minus
              corporis aliquam, iste veritatis, natus magni quidem assumenda
              repudiandae id laborum incidunt delectus accusamus quibusdam?
            </p>
            <h2>Find Us Here Online</h2>
            <ul className={classes.sci}>
              <li>
                <a href="##">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="##">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="##">
                  <FontAwesomeIcon icon={faInstagramSquare} />
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.quicklinks}>
            <h2>Support</h2>
            <ul className={classes.sci}>
              <li>
                <a href="##">Help</a>
              </li>
              <li>
                <a href="##">Privacy</a>
              </li>
              <li>
                <a href="##">More Knowledge</a>
              </li>
            </ul>
          </div>
          <div className={classes.quicklinks}>
            <h2>Company</h2>
            <ul className={classes.sci}>
              <li>
                <a href="##">About Us</a>
              </li>
              <li>
                <a href="##">Terms of Use</a>
              </li>
              <li>
                <a href="##">Our Partners</a>
              </li>
            </ul>
          </div>
          <div className={classes.developer}>
            <h2>Developers</h2>
            <ul className={classes.sci}>
              <li>
                <a href="##">Docs</a>
              </li>
              <li>
                <a href="##">Intregrations</a>
              </li>
              <li>
                <a href="##">API Reference</a>
              </li>
            </ul>
          </div>
          <div className={classes.contact}>
            <h2>Contact Us</h2>
            <ul className={classes.info}>
              <li>
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <p>
                  <a href="##">+91-6002379821</a>
                </p>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <p>
                  <a href="##">scraponics@gmail.com</a>
                </p>
              </li>
            </ul>
          </div>
          <div className={classes.img}>
            <img src={polimg} alt="Pollution Control Board image" />
          </div>
          <div className={classes.img}>
            <img src={stakeholderimg} alt="Pollution Control Board image" />
          </div>
        </div>
      </footer>
      <div className={classes.copyright}>
        <p>Copyright Protected @CDAC 2023. All Right Reserved</p>
      </div>
    </>
  );
}

export default Footer;
