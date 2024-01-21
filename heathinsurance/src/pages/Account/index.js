import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Account.module.scss';
import Banner from '../../assets/image/banner-top.jpg';

import { AccountCustomerApi, ContractsCustomerApi } from '../../services/ApiAccount/Account';

const cx = classNames.bind(styles);

function Account() {
    const [activeSection, setActiveSection] = useState('list_insurance');
    const [activeListInsurance, setActiveListInsurance] = useState('list_isActive');
    const [activeListRequire, setActiveListRequire] = useState('list_isPaid');
    const [contractStatus, setContractStatus] = useState(0);
    const [contractsOfCustomer, setContractsOfCustomer] = useState([]);

    //
    const handelListInsurance = (state) => {
        setActiveSection('list_insurance');
        const listInsuranceSection = document.getElementById(cx('list_insurance'));
        if (listInsuranceSection) {
            listInsuranceSection.style.display = 'flex';
        }
        const listRequireSection = document.getElementById(cx('list_require'));
        if (listRequireSection) {
            listRequireSection.style.display = 'none';
        }
        const revenue = document.getElementById(cx('revenue'));
        if (revenue) {
            revenue.style.display = 'none';
        }
    };

    const handelListRequire = (state) => {
        setActiveSection('list_require');
        const listInsuranceSection = document.getElementById(cx('list_insurance'));
        if (listInsuranceSection) {
            listInsuranceSection.style.display = 'none';
        }

        const listRequireSection = document.getElementById(cx('list_require'));
        if (listRequireSection) {
            listRequireSection.style.display = 'flex';
        }
        const revenue = document.getElementById(cx('revenue'));
        if (revenue) {
            revenue.style.display = 'none';
        }
    };

    const handelRevenue = () => {
        setActiveSection('revenue');
        const listInsuranceSection = document.getElementById(cx('list_insurance'));
        if (listInsuranceSection) {
            listInsuranceSection.style.display = 'none';
        }
        const listRequireSection = document.getElementById(cx('list_require'));
        if (listRequireSection) {
            listRequireSection.style.display = 'none';
        }
        const revenue = document.getElementById(cx('revenue'));
        if (revenue) {
            revenue.style.display = 'flex';
        }
    };

    // nav in lest list

    const handelIsUnpaid = () => {
        setActiveListInsurance('list_isUnpaid');
        setContractStatus(0);
    };

    const handelIsWaiting = () => {
        setActiveListInsurance('list_isWaiting');
        setContractStatus(1);
    };

    const handelIsCancel = () => {
        setActiveListInsurance('list_isCanceled');
        setContractStatus(2);
    };

    const handelIsActive = () => {
        setActiveListInsurance('list_isActive');
        setContractStatus(3);
    };

    const handelIsExpired = () => {
        setActiveListInsurance('list_isExpired');
        setContractStatus(4);
    };

    // list require
    const handelIsPaid = () => {
        setActiveListRequire('list_isPaid');
    };
    const handelIsPending = () => {
        setActiveListRequire('list_isPending');
    };
    const handelIsDenied = () => {
        setActiveListRequire('list_isDenied');
    };

    useEffect(() => {
        fetchData();
    }, [activeListInsurance]);

    const fetchData = async () => {
        try {
            const user = localStorage.getItem('token');
            // Phân tách token thành ba phần: Header, Payload, Signature
            let parts = user.split('.');

            // Giải mã Payload
            let decodedPayload = JSON.parse(atob(parts[1]));

            // Lấy giá trị của thuộc tính "emailaddress"
            let emailAddress = decodedPayload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'];
            const customer = await AccountCustomerApi(emailAddress);

            const contractsCustomer = await ContractsCustomerApi(customer.customerId, contractStatus);
            setContractsOfCustomer(contractsCustomer);
        } catch (error) {
            console.error('>>> Error fetching data: ', error);
        }
    };
    return (
        <>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <img className={cx('banner_top')} src={Banner} alt="Banner" />
                    <h1 className={cx('title')}>Tài khoản</h1>
                </div>

                <nav className={cx('navigation')}>
                    <li onClick={handelListInsurance}>
                        <Link to="">Thông tin bảo hiểm</Link>
                    </li>
                    <li onClick={handelListRequire}>
                        <Link to="">Thông tin phiếu yêu cầu</Link>
                    </li>
                    <li onClick={handelRevenue}>
                        <Link to="">Chi tiêu</Link>
                    </li>
                </nav>

                <div className={cx('content')}>
                    <section id={cx('list_insurance')} className={cx({ active: activeSection === 'list_insurance' })}>
                        <div className={cx('left_list')}>
                            <nav className={cx('navigation_leftList')}>
                                <li onClick={handelIsWaiting}>
                                    <Link to="">Chờ duyệt</Link>
                                </li>
                                <li onClick={handelIsCancel}>
                                    <Link to="">Bị hủy</Link>
                                </li>
                                <li onClick={handelIsActive}>
                                    <Link to="">Đang thụ hưởng</Link>
                                </li>
                                <li onClick={handelIsExpired}>
                                    <Link to="">Hết hạn</Link>
                                </li>
                            </nav>
                        </div>
                        <div className={cx('right_list')}>
                            <table className={cx('content-table')}>
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Tên bảo hiểm</th>
                                        <th>chương trình</th>
                                        <th>ngày bắt đầu</th>
                                        <th>ngày kết thúc</th>
                                        <th>Giá bảo hiểm</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contractsOfCustomer && contractsOfCustomer.length > 0 ? (
                                        contractsOfCustomer.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.productName}</td>
                                                <td>{item.programName}</td>
                                                <td>{`${item.startDate.substring(0, 10)}`}</td>

                                                <td>{`${item.endDate.substring(0, 10)}`}</td>
                                                <td>{item.totalPrice}</td>
                                                <td>
                                                    <button>Chi tiết</button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <p>không có dữ liệu</p>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section
                        id={cx('list_require')}
                        className={cx({ active: activeSection === 'list_require' })}
                        style={{ display: 'none' }}
                    >
                        <div className={cx('left_list')}>
                            <nav className={cx('navigation_leftList')}>
                                <li onClick={handelIsUnpaid}>
                                    <Link to="">Chưa thanh toán</Link>
                                </li>
                                <li onClick={handelIsPaid}>
                                    <Link to="">Đã được thanh toán</Link>
                                </li>
                                <li onClick={handelIsPending}>
                                    <Link to="">Chờ duyệt</Link>
                                </li>

                                <li onClick={handelIsDenied}>
                                    <Link to="">Bị hủy</Link>
                                </li>
                            </nav>
                        </div>
                        <div className={cx('right_list')}>
                            <table className={cx('content-table')}>
                                <thead>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Name</th>
                                        <th>Points</th>
                                        <th>Team</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Domenic</td>
                                        <td>88,110</td>
                                        <td>dcode</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Sally</td>
                                        <td>72,400</td>
                                        <td>Students</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Nick</td>
                                        <td>52,300</td>
                                        <td>dcode</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section id={cx('revenue')} className={cx({ active: activeSection === 'revenue' })}>
                        <h1>Revenue</h1>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Account;
