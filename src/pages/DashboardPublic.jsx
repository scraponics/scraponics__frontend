import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Sidebar from '../PublicDashComp/Sidebar/Sidebar';
import Dashboard from '../PublicDashComp/Dashboard/Dashboard';
import VendorList from '../PublicDashComp/VendorList/VendorList';
// import Geography from '../PublicDashComp/Geography/Geography';
import IndiaMap from '../PublicDashComp/IndiaMap/IndiaMap';
import Transactions from '../PublicDashComp/Transactions/Transactions';
import Piechart from '../PublicDashComp/Piechart/Piechart';

const DashboardPublic = () => {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route exact path='/vendorlist' element={<VendorList />} />
        <Route exact path='/geography' element={<IndiaMap />} />
        <Route exact path='/transactions' element={<Transactions />} />
        <Route exact path='/piechart' element={<Piechart />} />
      </Routes>
    </div>
  )
}

export default DashboardPublic