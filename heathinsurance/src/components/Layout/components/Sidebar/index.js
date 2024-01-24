import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import companyLogo from '../../../../assets/image/Logo2.png';
import './css/custom.css';
import Banner from '../../../../assets/image/banner-top.jpg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = ({ children }) => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/admin');
    const [activeDropdown, setActiveDropdown] = useState('/admin/layouts');
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
    const handleNavLinkClick = (path) => {
        setActiveLink(path);
        // Perform any other actions if needed
    };
    const handleDropdownClick = (path) => {
        setActiveDropdown(path);
    };
    const handleDropdownToggleClick = (event) => {
       
        event.preventDefault(); // Prevent the default behavior (e.g., navigation)
        
    };
    
    return (
        <div>
            <div id="sidebar">
                <div class="sidebar-header">
                    <h3>
                        <img style={{ borderRadius: '0px' }} src={companyLogo} class="img-fluid" />
                        <span>Nhóm 8</span>
                    </h3>
                </div>
                <ul class="list-unstyled component m-0">
                    <li className={activeLink === '/admin' ? 'active' : ''}>
                        <NavLink to="/admin/" className="link" activeclassName="active" onClick={()=>{handleDropdownClick('');handleNavLinkClick('/admin')}}>
                            <i class="material-icons">home</i>Trang chủ{' '}
                        </NavLink>
                    </li>
                    <li className={activeLink === '/admin/registers/' ? 'active' : ''}>
                        <NavLink to="/admin/registers/" className="link" activeclassName="active" onClick={()=>{handleDropdownClick('');handleNavLinkClick('/admin/registers/')}}>
                            <i class="material-icons">apps</i> Phiếu Đăng ký{' '}
                        </NavLink>
                    </li>
                    <li className={activeLink === '/admin/users/' ? 'active' : ''}>
                        <NavLink to="/admin/users/" className="link" activeclassName="active" onClick={()=>{handleDropdownClick('');handleNavLinkClick('/admin/users/')}}>
                            <i class="material-icons">person</i>Khách Hàng{' '}
                        </NavLink>
                    </li>
                    <li className={activeLink === '/admin/request/' ? 'active' : ''}>
                        <NavLink to="/admin/request/" className="link" activeclassName="active" onClick={()=>{handleDropdownClick('');handleNavLinkClick('/admin/request/')}}>
                            <i class="material-icons">request_quote</i>Phiếu Yêu Cầu{' '}
                        </NavLink>
                    </li>
                    <li className={activeLink === '/admin/payment/' ? 'active' : ''}>
                        <NavLink to="/admin/payment/" className="link" activeclassName="active" onClick={()=>{handleDropdownClick('');handleNavLinkClick('/admin/payment/')}}>
                            <i class="material-icons">receipt_long</i>Phiếu thanh toán{' '}
                        </NavLink>
                    </li>
                    <li className={activeLink === '/admin/finance/' ? 'active' : ''}>
                        <NavLink to="/admin/finance/" className="link" activeclassName="active" onClick={()=>{handleDropdownClick('');handleNavLinkClick('/admin/finance/')}}>
                            <i class="material-icons">monetization_on</i>Tài chính{' '}
                        </NavLink>
                    </li>
                    <li
                        className={`dropdown ${isDropdownOpen ? 'show' : ''} ${activeLink === '/admin/layouts' ? 'active' : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" onClick={(e) => handleDropdownToggleClick(e)}>
                            <i className="material-icons">aspect_ratio</i>Layouts
                        </a>

                        <ul className={`collapse list-unstyled menu ${isDropdownOpen ? 'show' : ''}`} id="homeSubmenu1">
                            <li className={activeDropdown === '/admin/insurances' ? 'active' : ''}>
                                <NavLink to="/admin/insurances/" onClick={() => {handleDropdownClick('/admin/insurances'); handleNavLinkClick('/admin/layouts')}}>Insurance</NavLink>
                            </li>
                            <li className={activeDropdown === '/admin/benefits' ? 'active' : ''}>
                                <NavLink to="/admin/benefits/" onClick={() => {handleDropdownClick('/admin/benefits'); handleNavLinkClick('/admin/layouts')}}>Benefit</NavLink>
                            </li>
                        </ul>
                    </li>

                    <li class="">
                        <a href="#" class="" >
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
