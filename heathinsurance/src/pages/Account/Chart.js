import React, { useState, useEffect } from 'react';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './ChartStyle.scss';

import { ContractsCustomerApi, AccountCustomerApi, totalFeeByYearApi } from '../../services/ApiAccount/Account'



const Chart = () => {
    //barchar
    let dataBarCharDefault = [
        {
            month: 1,
            uv: 0,
            pv: 0,
        },
        {
            month: 2,
            uv: 0,
            pv: 0,
        },
        {
            month: 3,
            uv: 0,
            pv: 0,
        },
        {
            month: 4,
            uv: 0,
            pv: 0,
        },
        {
            month: 5,
            uv: 0,
            pv: 0,
        },
        {
            month: 6,
            uv: 0,
            pv: 0,
        },
        {
            month: 7,
            uv: 0,
            pv: 0,
        },
        {
            month: 8,
            uv: 0,
            pv: 0,
        },
        {
            month: 9,
            uv: 0,
            pv: 0,
        },
        {
            month: 10,
            uv: 0,
            pv: 0,
        },
        {
            month: 11,
            uv: 0,
            pv: 0,
        },
        {
            month: 12,
            uv: 0,
            pv: 0,
        },
    ];

    // Pie chart
    const dataPieChartInsuranceDefault = [
        { name: 'Đang thụ hưởng', value: 100 },
        { name: 'Hết hạn', value: 200 },
    ];
    const dataPieChartRequestDefault = [
        { name: 'Chưa thanh toán', value: 100 },
        { name: 'Đã được thanh toán', value: 300 },
        { name: 'Chờ duyệt', value: 100 },
        { name: 'Bị hủy', value: 80 },
    ];
    const [dataBarChart, setDataBarChart] = useState(dataBarCharDefault);
    const [dataPieChartInsurance, setDataPieChartInsurance] = useState(dataPieChartInsuranceDefault);
    const [dataPieChartRequest, setSataPieChartRequest] = useState(dataPieChartRequestDefault);
    const [userData, setUserData] = useState({});
    const [contractsOfCustomer, setContractsOfCustomer] = useState([]);
    const [contractsUsingOfCustomer, setContractsUsingOfCustomer] = useState([]);
    const [contractsExpiredOfCustomer, setContractsExpiredOfCustomer] = useState([]);
    const [yearsInContract, setYearsInContract] = useState([]);
    const [selectedYear, setSelectedYear] = useState('');
    useEffect(() => {
        fetchData();
    }, [selectedYear]);
    useEffect(() => {
        dataBarChartBYear(selectedYear);
    }, [selectedYear]);
    const fetchData = async () => {
        try {
            const user = localStorage.getItem('token');
            // Phân tách token thành ba phần: Header, Payload, Signature
            let parts = user.split('.');
            const role = localStorage.getItem('role')

            // Giải mã Payload
            let decodedPayload = JSON.parse(atob(parts[1]));

            // Lấy giá trị của thuộc tính "emailaddress"
            let emailAddress = decodedPayload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'];
            if (role === "Customer") {
                const customer = await AccountCustomerApi(emailAddress);
                setUserData(customer);
                const contractUsings = await ContractsCustomerApi(customer.customerId, 2);
                const contractExpireds = await ContractsCustomerApi(customer.customerId, 3);
                const contracts = contractUsings.concat(contractExpireds);
                setContractsOfCustomer(contracts);
                setContractsUsingOfCustomer(contractUsings);
                setContractsExpiredOfCustomer(contractExpireds);
                const uniqueYearsArray = [...new Set(contracts.map(contract => new Date(contract.confirmDate).getFullYear()))];
                setYearsInContract(uniqueYearsArray.sort((a, b) => a - b));
                updateDataPieChartInsurance();

            }
        } catch (error) {
            console.log(error);
        }
    }
    const dataBarChartBYear = async (year) => {
        if (year) {
            const dataForChart = await totalFeeByYearApi(selectedYear);

            const updatedData = dataBarChart.map(item => {
                const month = item.month;
                const total = dataForChart.find(dataItem => dataItem.month === month)?.total || 0;
                return { ...item, uv: total };
            });
            setDataBarChart(updatedData);

        }

    }
    const calculateTotalPrice = (contracts) => {
        return contracts.reduce((total, contract) => total + contract.totalPrice, 0);
    };

    const updateDataPieChartInsurance = () => {
        // Tính tổng totalPrice cho contractsUsingOfCustomer
        const totalUsing = calculateTotalPrice(contractsUsingOfCustomer);

        // Tính tổng totalPrice cho contractsExpiredOfCustomer
        const totalExpired = calculateTotalPrice(contractsExpiredOfCustomer);

        // Cập nhật giá trị cho dataPieChartInsurance
        setDataPieChartInsurance([
            { name: 'Đang thụ hưởng', value: totalUsing },
            { name: 'Hết hạn', value: totalExpired },
        ]);
    };


    const handleSelectChange = async (event) => {
        setSelectedYear(event.target.value);
        //dataChartBYear(event.target.value);

    };
    return (
        <div className="spend">
            {/* <span style={{ marginBottom: '20px' }}>Biểu đồ chi tiêu</span> */}
            <div className="insurance_policy">
                <span>
                    Chọn năm <span style={{ color: 'red' }}> *</span>
                </span>
                <select
                    value={selectedYear}
                    onChange={handleSelectChange}
                    style={{ textAlign: 'center' }}
                >
                    {/* Hiển thị các năm từ mảng */}
                    {yearsInContract.map((year, index) => (
                        <option key={index} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
            <div className="chart">
                <div className="barchart">
                    <BarChart
                        width={500}
                        height={300}
                        data={dataBarChart && dataBarChart.length > 0 ? dataBarChart : dataBarCharDefault}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </div>
                <div className="piechart">
                    <PieChart width={400} height={400}>
                        <Pie data={dataPieChartInsurance} dataKey="value" cx={200} cy={200} outerRadius={60} fill="#8884d8" />
                        <Pie
                            data={dataPieChartRequest}
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

export default Chart;
