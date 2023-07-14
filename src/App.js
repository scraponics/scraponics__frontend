import React from 'react';
import { Route, Routes } from 'react-router-dom';

// pages
import Home from './pages/Home';
import LoginIndUser from './pages/LoginIndUser';
import LoginOrg from './pages/LoginOrg';
import LoginVendor from './pages/LoginVendor';
import SignupIndUser from './pages/SignupIndUser';
import SignupOrg from './pages/SignupOrg';
import SignupVendor from './pages/SignupVendor';
import RatePage from './pages/RatePage';
import DashboardPublic from './pages/DashboardPublic';
import DashboardUser from './pages/DashboardUser';
import DashboardVendor from './pages/DashboardVendor';
import Resource from './pages/Resource';
import ServicesUser from './pages/ServicesUser';
import ServicesVendor from './pages/ServicesVendor';
import ServicesGovt from './pages/ServicesGovt';

// styles
import './App.css';


const App = () => {
    return (
        <div>
            <div className="routes">
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/rate' element={<RatePage />} />
                    <Route exact path='/logininduser' element={<LoginIndUser />} />
                    <Route exact path='/signupinduser' element={<SignupIndUser />} />
                    <Route exact path='/loginorg' element={<LoginOrg />} />
                    <Route exact path='/signuporg' element={<SignupOrg />} />
                    <Route exact path='/loginvendor' element={<LoginVendor />} />
                    <Route exact path='/signupvendor' element={<SignupVendor />} />
                    <Route exact path='/dashboardpublic/*' element={<DashboardPublic />} />
                    <Route exact path='/dashboarduser/*' element={<DashboardUser />} />
                    <Route exact path='/dashboardvendor/*' element={<DashboardVendor />} />
                    <Route exact path='/servicesuser' element={<ServicesUser />} />
                    <Route exact path='/servicesvendor' element={<ServicesVendor />} />
                    <Route exact path='/servicesgovt' element={<ServicesGovt />} />
                    <Route exact path='/resource' element={<Resource />} />
                </Routes>
            </div>
        </div>
    )
}

export default App;