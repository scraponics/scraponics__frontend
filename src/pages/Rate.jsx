import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Rateus from '../components/Rateus/Rateus';
import Card2 from '../components/Card2/Card2'

function Rate() {
    return (
      <>
        <Navbar />
        <Rateus />
        <Card2 />
        <Footer />
      </>
    );
}

export default Rate