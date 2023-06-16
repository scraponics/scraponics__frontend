import React from 'react';
import { Route, Routes } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Rate from './pages/Rate';

// styles
import './App.css';


const App = () => {
    return (
        <div>
            <div className="routes">
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/Rate' element={<Rate/>} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/signup' element={<Signup />} />
                </Routes>
            </div>
        </div>
    )
}

export default App;