import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'BIỂU ĐỒ CHI TIÊU',
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

const chart = () => {
    return <Bar options={options} data={data} />;
};

export default chart;
