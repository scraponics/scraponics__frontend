import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Rateus from '../components/Rateus/Rateus';
import Card from '../components/Card/Card'

function Rate() {
    return (
      <>
        <Navbar />
        <Rateus />
        <Card/>
        <Footer />
      </>
    );
}

export default Rate