import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import companyLogo from '../../../../assets/image/Logo2.png';
import { MdAccountCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Login from './../../../../pages/Login/index';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={companyLogo} alt="Logo" />
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
                    <div>
                        <button className={cx('login-btn')}>
                            <Link to="/login">Login</Link>
                        </button>
                        <button className={cx('logup-btn')}>
                            <Link to="/signup">Logup</Link>
                        </button>
                    </div>
                    <div className={cx('account')}>
                        <Link to="/account">
                            <MdAccountCircle />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
