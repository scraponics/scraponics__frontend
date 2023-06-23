import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { BiBookContent } from "react-icons/bi";
import { BsBook } from "react-icons/bs";
import search from "../../assets/search-1.png";
import c1 from "../../assets/c1.jpeg";
import c2 from "../../assets/c2.jpeg";
import c3 from "../../assets/c3.jpeg";
import resourcelogo from "../../assets/resourcelogo2.jpg";
import resourceimg from "../../assets/resourcelogo.jpg";

// Css
import classes from "../Res/Res.module.css";

function Res() {
  const [query, setQuery] = useState("");
  return (
    <div className={classes.maindiv}>
      {/* Main content */}
      <div className={classes.maincontainer}>
        <div className={classes.maintext}>
          <h1>Resource Hub</h1>
        </div>
        <input
          type="text"
          placeholder="Search For Your Answers "
          onClick={(e) => setQuery(e.target.value)}
        ></input>
        {/* <label>
          <img
            src={search}
            alt="Search Icon"
            style={{ width: 30, height: 20 }}
          />
        </label> */}
        <div className={classes.cardcontainer}>
          <img src={resourcelogo} alt="Resource" />
          <h3>Resources</h3>
          <h1>E-Waste</h1>
          <div className={classes.maincontent}>
            <p>
              Electronic Waste or E-waste means electrical and electronic
              equipment, whole or in part discarded as waste by the consumer or
              bulk consumer as well as rejects from manufacturing, refurbishment
              and repair processes.
            </p>
          </div>
        </div>

        <div className={classes.box}>
          <div className={classes.imgBx}>
            <img src={c1} alt="Card" />
          </div>
          <div className={classes.content}>
            <h3>Why E-Waste ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id iste,
              qui, exercitationem repellat quasi sequi adipisci sint error minus
              illo fugiat ullam at repudiandae debitis, commodi consequatur
              omnis labore sapiente vel adipisci expedita vitae eveniet deleniti
              iste accusamus.
            </p>
            <button className={classes.boxbtn}>Learn More</button>
          </div>
        </div>

        <div className={classes.box}>
          <div className={classes.imgBx}>
            <img src={c2} alt="Card" />
          </div>
          <div className={classes.content}>
            <h3>Storage of E-Waste</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id iste,
              qui, exercitationem repellat quasi sequi adipisci sint error minus
              illo fugiat ullam at repudiandae debitis, commodi consequatur
              omnis labore sapiente vel adipisci expedita vitae eveniet deleniti
              iste accusamus.
            </p>
            <button className={classes.boxbtn}>Learn More</button>
          </div>
        </div>

        <div className={classes.box}>
          <div className={classes.imgBx}>
            <img src={c3} alt="Card" />
          </div>
          <div className={classes.content}>
            <h3>Dismantling of E-Waste</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id iste,
              qui, exercitationem repellat quasi sequi adipisci sint error minus
              illo fugiat ullam at repudiandae debitis, commodi consequatur
              omnis labore sapiente vel adipisci expedita vitae eveniet deleniti
              iste accusamus.
            </p>
            <button className={classes.boxbtn}>Learn More</button>
          </div>
        </div>

        <div className={classes.footercard}>
          <div className={classes.subcard}>
            <img src={resourceimg} alt="Infinity Loop" />
          </div>
          <h3>Circular Economy</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id iste,
            qui, exercitationem repellat quasi sequi adipisci sint error minus
            illo fugiat ullam at repudiandae debitis, commodi consequatur omnis
            labore sapiente vel adipisci expedita vitae eveniet deleniti iste
            accusamus.
          </p>
          <button className={classes.footerbtn}>Learn More</button>
        </div>
      </div>

      {/* Side Bar */}
      <div className={classes.sidebar}>
        <ul>
          <li>
            <a href="##">
              <span className={classes.icon}>
                <AiOutlineHome />
              </span>
              <span className={classes.text}>Home</span>
            </a>
          </li>
          <li>
            <a href="##">
              <span className={classes.icon}>
                <BiBookContent />
              </span>
              <span className={classes.text}>Policiy</span>
            </a>
          </li>
          <li>
            <a href="##">
              <span className={classes.icon}>
                <GiHamburgerMenu />
              </span>
              <span className={classes.text}>List of SPCBs</span>
            </a>
          </li>
          <li>
            <a href="##">
              <span className={classes.icon}>
                <MdOutlinePeopleAlt />
              </span>
              <span className={classes.text}>List of Vendors</span>
            </a>
          </li>
          <li>
            <a href="##">
              <span className={classes.icon}>
                <VscGraph />
              </span>
              <span className={classes.text}> Statistics</span>
            </a>
          </li>
          <li>
            <a href="##">
              <span className={classes.icon}>
                <BsBook />
              </span>
              <span className={classes.text}>Education Materials</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Res;
