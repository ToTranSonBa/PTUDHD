import React from 'react';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './ChartStyle.scss';

//barchar
const data = [
    {
        name: 'Tháng 1',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Tháng 2',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Tháng 3',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Tháng 4',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Tháng 5',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Tháng 6',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Tháng 7',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Tháng 8',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Tháng 9',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Tháng 10',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Tháng 11',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Tháng 12',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

// Pie chart
const data01 = [
    { name: 'Chờ duyệt', value: 400 },
    { name: 'Bị hủy', value: 300 },
    { name: 'Đang thụ hưởng', value: 300 },
    { name: 'Hết hạn', value: 200 },
];
const data02 = [
    { name: 'Chưa thanh toán', value: 100 },
    { name: 'Đã được thanh toán', value: 300 },
    { name: 'Chờ duyệt', value: 100 },
    { name: 'Bị hủy', value: 80 },
];

const chart = () => {
    return (
        <div className="spend">
            {/* <span style={{ marginBottom: '20px' }}>Biểu đồ chi tiêu</span> */}
            <div className="insurance_policy">
                <span>
                    Chọn năm <span style={{ color: 'red' }}> *</span>
                </span>
                <select style={{ textAlign: 'center' }}>
                    <option value="1">2023</option>
                    <option value="2">2024</option>
                    <option value="3">2025</option>
                </select>
            </div>
            <div className="chart">
                <div className="barchart">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </div>
                <div className="piechart">
                    <PieChart width={400} height={400}>
                        <Pie data={data01} dataKey="value" cx={200} cy={200} outerRadius={60} fill="#8884d8" />
                        <Pie
                            data={data02}
                            dataKey="value"
                            cx={200}
                            cy={200}
                            innerRadius={70}
                            outerRadius={90}
                            fill="#82ca9d"
                            label
                        />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default chart;
