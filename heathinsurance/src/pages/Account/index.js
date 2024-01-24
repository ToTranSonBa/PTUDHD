import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Chart from './Chart';
import PersonalInfomation from './PersonalInfo';
import styles from './Account.module.scss';
import Banner from '../../assets/image/banner-top.jpg';
import CustomerRequest from './../CustomerRequest/CustomerRequest';

import { AccountCustomerApi, ContractsCustomerApi } from '../../services/ApiAccount/Account';

const cx = classNames.bind(styles);

function Account() {
    const [activeSection, setActiveSection] = useState('list_insurance');
    const [activeListInsurance, setActiveListInsurance] = useState('list_isActive');
    const [activeListRequire, setActiveListRequire] = useState(0);
    const [contractStatus, setContractStatus] = useState(0);
    const [contractsOfCustomer, setContractsOfCustomer] = useState([]);
<<<<<<< Updated upstream
    const [registerDetail, setRegisterDetail] = useState({});
    const [showForm, setShowForm] = useState(false);
=======
    const [requestStatus, setRequestStatus] = useState(0);
>>>>>>> Stashed changes

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
        const profile = document.getElementById(cx('profile'));
        if (profile) {
            profile.style.display = 'none';
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
        const profile = document.getElementById(cx('profile'));
        if (profile) {
            profile.style.display = 'none';
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
        const profile = document.getElementById(cx('profile'));
        if (profile) {
            profile.style.display = 'none';
        }
    };

    const handelProfile = () => {
        setActiveSection('profile');
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
            revenue.style.display = 'none';
        }
        const profile = document.getElementById(cx('profile'));
        if (profile) {
            profile.style.display = 'flex';
        }
    };

    // nav in lest list

    const handelIsUnpaid = () => {
        setActiveListInsurance('list_isUnpaid');
        setContractStatus(0);
        setActiveListRequire(0);
    };

    const handelIsWaiting = () => {
        setActiveListInsurance('list_isWaiting');
        setContractStatus(0);
    };

    const handelIsCancel = () => {
        setActiveListInsurance('list_isCanceled');
        setContractStatus(1);
    };

    const handelIsActive = () => {
        setActiveListInsurance('list_isActive');
        setContractStatus(2);
    };

    const handelIsExpired = () => {
        setActiveListInsurance('list_isExpired');
        setContractStatus(3);
    };

    // list require
    const handelIsPaid = () => {
        setActiveListRequire(1);
    };
    const handelIsPending = () => {
        setActiveListRequire(2);
    };
    const handelIsDenied = () => {
        setActiveListRequire(3);
        
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
    const handleView = (id) => {
        for (let i = 0; i < contractsOfCustomer.length; i++) {
            if (contractsOfCustomer[i].contractId === id) {
                setRegisterDetail(contractsOfCustomer[i]);
                console.log(contractsOfCustomer[i]);
                break;
            }
        }
        setShowForm(!showForm);
    };

    return (
        <>
            <div className={cx('header')}>
                <img style={{ borderRadius: '0' }} className={cx('banner_top')} src={Banner} alt="Banner" />
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
                <li onClick={handelProfile}>
                    <Link to="">Thông tin cá nhân</Link>
                </li>
            </nav>

            <div className={cx('content')}>
                <section id={cx('list_insurance')} className={cx({ active: activeSection === 'list_insurance' })}>
                    <div>
                        {showForm && (
                            <div className="overlay-register" style={{ paddingLeft: '260px' }}>
                                <div
                                    className="form-container-register"
                                    style={{
                                        textAlign: 'center',
                                        height: '800px',
                                        width: '1000px',
                                        overflowY: 'auto',
                                    }}
                                >
                                    <span
                                        onClick={() => setShowForm(false)}
                                        className="cancel"
                                        title="cancel"
                                        data-toggle="tooltip"
                                        style={{
                                            cursor: 'pointer',
                                            float: 'right',
                                            position: 'fixed',
                                            zIndex: '99',
                                            right: '20%',
                                        }}
                                    >
                                        <i class="material-icons close">&#xe5cd;</i>
                                    </span>
                                    <br></br>
                                    <span
                                        style={{
                                            fontSize: '20px',
                                            fontWeight: 'bold',
                                            color: '#16a317',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Thông tin Đăng ký
                                    </span>
                                    {registerDetail.customer ? (
                                        <div style={{ textAlign: 'center' }}>
                                            <table
                                                style={{
                                                    textAlign: 'left',
                                                    marginBottom: '16px',
                                                    width: '-webkit-fill-available',
                                                }}
                                            >
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <strong>Nhân viên duyệt</strong>
                                                        </td>
                                                        <td>{registerDetail.employee}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>Ngày bắt đầu</strong>
                                                        </td>
                                                        <td>{registerDetail.startDate}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>Ngày kết thúc</strong>
                                                        </td>
                                                        <td>{registerDetail.endDate}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>Giá bảo hiểm</strong>
                                                        </td>
                                                        <td>{registerDetail.totalPrice}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>Trạng thái</strong>
                                                        </td>
                                                        <td>
                                                            <span style={{ border: '0px' }}>
                                                                {registerDetail.status === 'Unpaid'
                                                                    ? 'Chưa thanh toán'
                                                                    : 'Đã thanh toán'}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>Tên khách hàng</strong>
                                                        </td>
                                                        <td>{registerDetail.customer.name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>CMND/CCCD</strong>
                                                        </td>
                                                        <td>{registerDetail.customer.identifycationNumber}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>Ngày sinh</strong>
                                                        </td>
                                                        <td>{registerDetail.customer.birthday}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>Số điện thoại</strong>
                                                        </td>
                                                        <td>{registerDetail.customer.phoneNumber}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>Email</strong>
                                                        </td>
                                                        <td>{registerDetail.customer.email}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>Địa chỉ</strong>
                                                        </td>
                                                        <td>{registerDetail.customer.address}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>Tên bảo hiểm</strong>
                                                        </td>
                                                        <td>{registerDetail.productName}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>Ngày tạo</strong>
                                                        </td>
                                                        <td>{registerDetail.createDate}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>Chương trình</strong>
                                                        </td>
                                                        <td>{registerDetail.programName}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    ) : (
                                        <p>Không có dữ liệu</p>
                                    )}

                                    <div
                                        style={{
                                            textAlign: 'center',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: '20px',
                                                fontWeight: 'bold',
                                                color: '#16a317',
                                                textAlign: 'center',
                                            }}
                                        >
                                            Thông tin tình trạng sức khỏe của khách hàng
                                        </span>
                                        <table
                                            style={{
                                                marginBottom: '16px',
                                                width: '950px',
                                            }}
                                        >
                                            <thead>
                                                <tr>
                                                    <th>STT</th>
                                                    <th>Điều kiện sức khỏe</th>
                                                    <th>Tình trạng</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {registerDetail.contractHealthConditions.length > 0 ? (
                                                    registerDetail.contractHealthConditions.map((curElem, i) => (
                                                        <tr key={curElem.benefitTypeId}>
                                                            <td>{i + 1}</td>
                                                            <td>
                                                                <span
                                                                    style={{
                                                                        width: '100%',
                                                                        whiteSpace: 'wrap',
                                                                        overflowX: 'wrap',
                                                                    }}
                                                                >
                                                                    {curElem.conditionName}
                                                                </span>
                                                            </td>
                                                            <td
                                                                style={{
                                                                    textAlign: 'center',
                                                                    maxWidth: '98px',
                                                                    margin: 'auto',
                                                                }}
                                                            >
                                                                <span>{curElem.status ? 'Có' : 'Không'}</span>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="3">
                                                            <span>Không có dữ liệu</span>
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={cx('left_list')}>
                        <nav className={cx('navigation_leftList')}>
                            <li id={cx('isWaiting')} onClick={handelIsWaiting}>
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
                                    <th style={{ textAlign: 'center' }}>STT</th>
                                    <th style={{ textAlign: 'center' }}>Tên bảo hiểm</th>
                                    <th style={{ textAlign: 'center' }}>Chương trình</th>
                                    <th style={{ textAlign: 'center' }}>Ngày bắt đầu</th>
                                    <th style={{ textAlign: 'center' }}>Ngày kết thúc</th>
                                    <th style={{ textAlign: 'center' }}>Giá bảo hiểm</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {contractsOfCustomer && contractsOfCustomer.length > 0 ? (
                                    contractsOfCustomer.map((item, index) => (
                                        <tr key={index}>
                                            <td style={{ textAlign: 'center' }}>{index + 1}</td>
                                            <td>{item.productName}</td>
                                            <td>{item.programName}</td>
                                            <td style={{ textAlign: 'center' }}>
                                                {' '}
                                                {`${item.startDate.substring(0, 10)}`}
                                            </td>
                                            <td style={{ textAlign: 'center' }}>
                                                {' '}
                                                {`${item.endDate.substring(0, 10)}`}
                                            </td>
                                            <td style={{ textAlign: 'center' }}> {item.totalPrice}</td>
                                            <td>
                                                <button onClick={() => handleView(item.contractId)}>Chi tiết</button>
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
                            <li onClick={() => handelIsUnpaid()}>
                                <Link to="">Chưa thanh toán</Link>
                            </li>
                            <li onClick={() => handelIsPaid()}>
                                <Link to="">Đã được thanh toán</Link>
                            </li>
                            <li onClick={() => handelIsPending()}>
                                <Link to="">Chờ duyệt</Link>
                            </li>

<<<<<<< Updated upstream
                            <li onClick={handelIsDenied}>
                                <Link to="">Bị hủy</Link>
                            </li>
                        </nav>
                    </div>
                    <CustomerRequest></CustomerRequest>
                </section>
=======
                                <li onClick={() => handelIsDenied()}>
                                    <Link to="">Bị hủy</Link>
                                </li>
                            </nav>
                        </div>
                        
                        {/* <div className={cx('right_list')}>
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
                        </div> */}
                        <CustomerRequest status={activeListRequire}></CustomerRequest>
                    </section>

>>>>>>> Stashed changes
                <section id={cx('revenue')} className={cx({ active: activeSection === 'revenue' })}>
                    <Chart></Chart>
                </section>
                <section id={cx('profile')} className={cx({ active: activeSection === 'profile' })}>
                    <PersonalInfomation></PersonalInfomation>
                </section>
            </div>
        </>
    );
}

export default Account;
