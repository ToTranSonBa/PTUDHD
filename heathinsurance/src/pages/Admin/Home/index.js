import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './HomeAd.module.scss';

const cx = classNames.bind(styles);

function HomeAdmin() {
    const [activeSection, setActiveSection] = useState('list_insurance');
    const [activeListInsurance, setActiveListInsurance] = useState('list_isActive');
    const [activeListRequire, setActiveListRequire] = useState('list_isPaid');

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
    const handelIsActive = () => {
        setActiveListInsurance('list_isActive');
    };

    const handelIsWaiting = () => {
        setActiveListInsurance('list_isWaiting');
    };

    const handelIsExpired = () => {
        setActiveListInsurance('list_isExpired');
    };

    const handelIsCancel = () => {
        setActiveListInsurance('list_isCanceled');
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
    return (
        <>
            <div className={cx('container')}>
                <div className={cx('header')}>
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
                                <li onClick={handelIsActive}>
                                    <Link to="">Đang thụ hưởng</Link>
                                </li>
                                <li onClick={handelIsWaiting}>
                                    <Link to="">Chờ duyệt</Link>
                                </li>
                                <li onClick={handelIsExpired}>
                                    <Link to="">Hết hạn</Link>
                                </li>
                                <li onClick={handelIsCancel}>
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
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Domenic</td>
                                        <td>88,110</td>
                                        <td>dcode</td>
                                        <td>
                                            <button>Chi tiết</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Sally</td>
                                        <td>72,400</td>
                                        <td>Students</td>
                                        <td>
                                            <button>Chi tiết</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Nick</td>
                                        <td>52,300</td>
                                        <td>dcode</td>
                                        <td>
                                            <button>Chi tiết</button>
                                        </td>
                                    </tr>
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

export default HomeAdmin;
