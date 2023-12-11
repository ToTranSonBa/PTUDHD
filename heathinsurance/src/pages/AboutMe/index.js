import { Link } from 'react-router-dom';
import styles from './Aboutme.module.scss';

function AboutMe() {
    return (
        <div>
            <div className="container_header">
                <h1>Giới thiệu</h1>
            </div>

            <nav className="navigation">
                <li>
                    <Link to="#introduction">Giới thiệu</Link>
                </li>
                <li>
                    <Link to="#contact">Liên hệ</Link>
                </li>
            </nav>

            <div className="content">
                <section id="introduction">
                    <h2>Giới thiệu kênh bảo hiểm trực tuyến</h2>
                    <span className="short_des">
                        Đây là dự án môn học Bảo hiểm sức khỏe, Phân tích hệ thống thông tin hiện đại - HCMUS
                    </span>
                </section>
                <section id="contact">
                    <h2>Đồ án Bảo hiểm sức khỏe, Phân tích hệ thống thông tin hiện đại - HCMUS </h2>
                    <span>Nhóm 6</span>
                    <div>
                        <h5>Điện thoại</h5>
                        <span>(+84) 5718 717</span>
                    </div>
                    <div>
                        <h5>Email</h5>
                        <span>hoangcau14783@gmail.com</span>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AboutMe;
