import React from 'react'
import { Line, Doughnut } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    Tooltip,
    Legend
)

const ChartComp = () => {
    const data = {
        labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
        datasets: [{
            data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
            backgroundColor: "transprant",
            borderColor: "#f26c6d",
            pointBorderColor: "transprant",
            pointBorderWidth: "4",
            tension: 0.5
        }]
    };
    const options = {
        plugins: {
            legend: false
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                min: 0,
                max: 40000,
                ticks: {
                    stepSize: 10000,
                    callback: (value) => '$' + value
                },
                grid: {
                    borderDash: [10]
                }
            }
        }
    }

    return (
        <div style={{ display: 'flex' }}><b>Chart</b>

            <div style={{ width: '850px', height: "500px", marginLeft: "10px", marginTop: "5rem", backgroundColor: '#f2f2f2' }}>
                <Line data={data} options={options}></Line>
            </div>

            <div>
                <PieChart />
            </div>

        </div>
    )
}

export default ChartComp




export const PieChart = () => {
    const data = {
        
        datasets: [
            {
                label: [' Direct', ' Social',' Referal'],
                data: [55, 30, 15],
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
                borderWidth: 2,
            },
        ],
        labels: [' Direct', ' Social',' Referal']
    };
    return (
        <div style={{ width: '600px', paddingLeft: '3rem', height: "500px", marginTop: "5rem", backgroundColor: '#f2f2f2', marginLeft: '8rem' }}>
            <Doughnut data={data} ></Doughnut>
        </div>
    )
}
