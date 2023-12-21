import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import companyLogo from '../../../../assets/image/Logo2.png';
import { Link, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//icon;
import { MdOutlineLogout } from 'react-icons/md';
import { MdAccountCircle } from 'react-icons/md';

const cx = classNames.bind(styles);

function Header() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
        toast.success('Logout Success!');
    };

    // const thay vi var
    var token = localStorage.getItem('token');

    //fake token
    // if (!token || token === '') {
    //     token = '';
    // }
    token = 'áccs';
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')} style={{ cursor: 'pointer' }}>
                <Link to="/">
                    {' '}
                    <img src={companyLogo} alt="Logo" />
                </Link>
            </div>
            <nav className={cx('navbar')}>
                <li>
                    <Link to="/">Trang chủ</Link>
                </li>
                <li>
                    <Link to="/service">Dịch vụ</Link>
                </li>
                <li>
                    <Link to="/aboutme">Giới thiệu</Link>
                </li>
            </nav>
            <div className={cx('right_navbar')}>
                {token.length > 0 ? (
                    <div className={cx('account')}>
                        <Link to="/account">
                            <MdAccountCircle />
                        </Link>
                        <button className={cx('logout-btn')} onClick={handleLogout}>
                            <MdOutlineLogout />
                        </button>
                    </div>
                ) : (
                    <div className={cx('notoken')}>
                        <button className={cx('login-btn')}>
                            <Link to="/login">Login</Link>
                        </button>
                        <button className={cx('logup-btn')}>
                            <Link to="/signup">Logup</Link>
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
