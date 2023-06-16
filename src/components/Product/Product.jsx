import React, { useState } from "react";
import oldlt from "../../assets/old_laptop.jpg";

//Css
import classes from "../Product/Product.module.css";

function Product() {
  const [cards] = useState([
    {
      title: "Old TV Monitor",
      price: "₹1000",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In est quos laboriosam aliquid autem veritatis",

    },
    {
      title: "Old TV Monitor",
      price: "₹1000",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In est quos laboriosam aliquid autem veritatis",

    },
    {
      title: "Old TV Monitor",
      price: "₹1000",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In est quos laboriosam aliquid autem veritatis",

    },
    {
      title: "Old TV Monitor",
      price: "₹1000",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In est quos laboriosam aliquid autem veritatis",

    },
    {
      title: "Old TV Monitor",
      price: "₹1000",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In est quos laboriosam aliquid autem veritatis",
    },
    {
      title: "Old TV Monitor",
      price: "₹1000",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In est quos laboriosam aliquid autem veritatis",

    },
    {
      title: "Old TV Monitor",
      price: "₹1000",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In est quos laboriosam aliquid autem veritatis",

    },
    {
      title: "Old TV Monitor",
      price: "₹1000",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In est quos laboriosam aliquid autem veritatis",

    },
    {
      title: "Old TV Monitor",
      price: "₹1000",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In est quos laboriosam aliquid autem veritatis",
    },
  ]);

  return (
    <>
      <section>
        <div className={classes.contain}>
          <div className={classes.cards}>
            {cards.map((card, i) => (
              <div key={i} className={classes.card}>
                <img src={oldlt} />
                    <h3>{card.title}</h3>
                    <h3>{card.price}</h3>
                <p>{card.text}</p>
                <button className={classes.btn}>Know More</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
