import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import companyLogo from '../../../../assets/image/Logo2.png';
import { MdAccountCircle } from 'react-icons/md';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={companyLogo} alt="Logo" />
                </div>
                <nav className={cx('navbar')}>
                    <li>Trang chủ</li>
                    <li>Dịch vụ</li>
                    <li>Giới thiệu</li>
                </nav>
                <div className={cx('right_navbar')}>
                    <div>
                        <button className={cx('login-btn')}>LogIn</button>
                        <button className={cx('logup-btn')}>LogUp</button>
                    </div>
                    <div className={cx('account')}>
                        <MdAccountCircle />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
