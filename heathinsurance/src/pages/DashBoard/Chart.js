import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    CategoryScale,
    LinearScale,
    ArcElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Bar, Pie, Radar, Line } from 'react-chartjs-2';

import './Chart.scss';
import Table from './table';

ChartJS.register(
    ArcElement,
    RadialLinearScale,
    PointElement,
    LineElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Filler,
    Legend,
);

export const optionsbarchart = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: '',
        },
    },
};

export const optionspiechart = {
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: '',
        },
    },
};
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Số tiền thanh toán',
            data: [0, 1, 1, 3, 4, 5],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Số tiền được hỗ trợ',
            data: [0, 1, 2, 3, 4, 5],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const Doashboard = () => {
    return (
        <div className="spend">
            <div className="chart">
                <div className="piechart">
                    <Pie options={optionspiechart} data={data} />
                    <Table></Table>
                </div>
                <div className="multichar">
                    <div>
                        <Radar data={data} />
                        <Line options={options} data={data} />
                    </div>
                    <Bar options={optionsbarchart} data={data} />
                </div>
            </div>
        </div>
    );
};

export default Doashboard;
