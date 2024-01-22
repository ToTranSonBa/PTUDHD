import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import companyLogo from '../../../../assets/image/Logo2.png';
import './css/custom.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = ({ children }) => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
        toast.success('Logout Success!');
    };
    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };
    return (
        <div>
            <div id="sidebar">
                <div class="sidebar-header">
                    <h3>
                        <img src={companyLogo} class="img-fluid" />
                        <span>Nhóm 8</span>
                    </h3>
                </div>
                <ul class="list-unstyled component m-0">
                    <li class="active">
                        <NavLink to="/admin/" className="link" activeclassName="active">
                            <i class="material-icons">home</i>Trang chủ{' '}
                        </NavLink>
                    </li>
                    <li class="">
                        <NavLink to="/admin/registers/" className="link" activeclassName="active">
                            <i class="material-icons">apps</i> Phiếu Đăng ký{' '}
                        </NavLink>
                    </li>
                    <li class="">
                        <NavLink to="/admin/users/" className="link" activeclassName="active">
                            <i class="material-icons">person</i>Khách Hàng{' '}
                        </NavLink>
                    </li>
                    <li class="">
                        <NavLink to="/admin/insurances/" className="link" activeclassName="active">
                            <i class="material-icons">dashboard</i>Bảo Hiểm{' '}
                        </NavLink>
                    </li>
                    <li class="">
                        <NavLink to="/admin/request/" className="link" activeclassName="active">
                            <i class="material-icons">request_quote</i>Phiếu Yêu Cầu{' '}
                        </NavLink>
                    </li>
                    <li class="">
                        <NavLink to="/admin/finance/" className="link" activeclassName="active">
                            <i class="material-icons">monetization_on</i>Tài chính{' '}
                        </NavLink>
                    </li>
                    <li
                        className={`dropdown ${isDropdownOpen ? 'show' : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="material-icons">aspect_ratio</i>Layouts
                        </a>

                        <ul className={`collapse list-unstyled menu ${isDropdownOpen ? 'show' : ''}`} id="homeSubmenu1">
                            <li>
                                <NavLink to="/admin/insurances/">Insurance</NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/benefits/">Benefit</NavLink>
                            </li>
                        </ul>
                    </li>

                    <li class="">
                        <a href="#" class="">
                            <i class="material-icons">date_range</i>copy{' '}
                        </a>
                    </li>
                    <li class="">
                        <a onClick={handleLogout}>
                            <i class="material-icons">exit_to_app</i>Đăng xuất{' '}
                        </a>
                    </li>
                </ul>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
