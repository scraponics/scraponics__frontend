import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import classes from './Piechart.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
    labels: ['Consumer Electronics:', 'IT and Telecommunication Equipment', 'Office Equipment', 'Home Appliances', 'Industrial Equipment', 'Medical Devices'],
    datasets: [
        {
            label: 'percentage',
            data: [25, 25, 20, 10, 10, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const Piechart = () => {

    return (
        <div>
            <h1 className={classes.heading}>E-Waste generation Category-wise</h1>
            <Doughnut data={data} />
        </div>
    );
}

export default Piechart