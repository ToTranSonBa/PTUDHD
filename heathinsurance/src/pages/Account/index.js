import { Link } from 'react-router-dom';

function Account() {
    return (
        <div className="container">
            <div className="container__header">
                <h1>Tài khoản</h1>
            </div>
            <div className="container__body__left">
                <nav>
                    <li>
                        <Link to="#">Thông tin bảo hiểm</Link>
                    </li>
                    <li>
                        <Link to="#">Thông tin phiếu yêu cầu</Link>
                    </li>
                </nav>
            </div>
            <div className="content"></div>
        </div>
    );
}

export default Account;
