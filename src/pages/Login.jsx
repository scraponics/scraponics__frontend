import React from 'react'
import Signin from '../components/Signin/Signin'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Login = () => {
  return (
    <>
      <Navbar/>
      <Signin />
      <Footer/>
    </>
  );
}

export default Login