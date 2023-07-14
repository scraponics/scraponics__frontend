import React from 'react';
import { RiCustomerService2Line } from 'react-icons/ri';
import Piechart from '../Piechart/Piechart';

// styles
import classes from './Dashboard.module.css';


const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
      <h1 className={classes.heading}>Welcome to Public Dashboard</h1>
      <div className={classes.dashboardContainer}>
        <div className={classes.topContainer}>
          <div className={classes.dashboardCardContainer}>
            <div>
              <div className={classes.statContainer}>
                <div className={classes.box1}>
                  <p>Total Customers</p>
                  <RiCustomerService2Line className={classes.icon} />
                </div>
                <p className={classes.number}>127618</p>
                <div className={classes.box1}>
                  <p>+14%</p>
                  <p>than last month</p>
                </div>
              </div>
              <div className={classes.statContainer}>
                <div className={classes.box1}>
                  <p>Today transactions</p>
                  <RiCustomerService2Line className={classes.icon} />
                </div>
                <p className={classes.number}>12 tons</p>
                <div className={classes.box1}>
                  <p>+14%</p>
                  <p>than yesterday</p>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.statContainer}>
                <div className={classes.box1}>
                  <p>Weekly Transactions</p>
                  <RiCustomerService2Line className={classes.icon} />
                </div>
                <p className={classes.number}>100 tons</p>
                <div className={classes.box1}>
                  <p>+16%</p>
                  <p>than last week</p>
                </div>
              </div>
              <div className={classes.statContainer}>
                <div className={classes.box1}>
                  <p>Monthly Transactions</p>
                  <RiCustomerService2Line className={classes.icon} />
                </div>
                <p className={classes.number}>840 tons</p>
                <div className={classes.box1}>
                  <p>+14%</p>
                  <p>than last month</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.lineChartBox}>
            <Piechart />
          </div>
        </div>
        <div className={classes.bottomContainer}>
        </div>
      </div>
    </div>
  )
}

export default Dashboard