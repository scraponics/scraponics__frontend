import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Rateus from '../components/Rateus/Rateus';
import Product from '../components/Product/Product';

function Rate() {
    return (
      <>
        <Navbar />
        <Rateus />
        <Product />
        <Footer />
      </>
    );
}

export default Rate