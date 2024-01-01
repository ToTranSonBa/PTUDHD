import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RegistersApi } from '../../services/Admin/ApiRegister/register';

const Data = [
    {
        id: 1,
        userName: 'Nguyen Quoc Anh',
        birthday: '2023-12-21T07:04:23.100Z',
        email: 'quocmache@gmail.com',
        phoneNumber: '24353245243',
        insurancePro: 'Bảo hiểm ung thư',
        dateRegister: '23/09/2002',
    },
    {
        id: 2,
        userName: 'Nguyen Quoc Anh2',
        birthday: '2023-12-21T07:04:23.100Z',
        email: 'quocmache@gmail.com2',
        phoneNumber: '24523542',
        insurancePro: 'Bảo hiểm ung thư2',
        dateRegister: '23/09/2001',
    },
    {
        id: 3,
        userName: 'Nguyen Quoc Anh3',
        birthday: '2023-12-21T07:04:23.100Z',
        email: 'quocmache@gmail.com3',
        phoneNumber: '24524532',
        insurancePro: 'Bảo hiểm ung thư3',
        dateRegister: '23/09/2003',
    },
];

function Table() {
    const navigate = useNavigate();
    const [register, setRegister] = useState([]); // Correct usage of useState

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RegistersApi();
                console.log('check>>', response);
                setRegister(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []); // Include register in the dependency array if you want to log changes

    const handleDelete = (id) => {
        //call API
        navigate(`/admin/users`);
    };

    const handleAccept = (id) => {
        //call API
        navigate(`/admin/users`);
    };

    return (
        <div class="container">
            <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
                <div class="row ">
                    <div class="col-sm-3 mt-5 mb-4 text-gred">
                        <div className="search">
                            <form class="form-inline">
                                <input
                                    class="form-control mr-sm-2 rounded-pill border border-success"
                                    type="search"
                                    placeholder="Search User"
                                    aria-label="Search"
                                    style={{ height: '40px', fontSize: '15px', backgroundColor: 'white' }}
                                />
                            </form>
                        </div>
                    </div>
                    <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{ color: 'green' }}>
                        <h2>
                            <b style={{ fontSize: '25px' }}>Danh sách Khách hàng</b>
                        </h2>
                    </div>
                </div>
                <div class="row">
                    <div class="table-responsive ">
                        <table class="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name </th>
                                    <th>Birthday</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Gói bảo hiểm </th>
                                    <th>Chương trình Bảo Hiểm </th>
                                    <th>Ngày đăng ký </th>
                                    <th>Duyệt </th>
                                    <th>Xem chi tiết </th>
                                    <th>Xóa </th>
                                </tr>
                            </thead>
                            <tbody>
                                {register && register.length > 0 ? (
                                    register.map((curElem) => (
                                        <tr key={curElem.contractId}>
                                            {
                                                <tr key={curElem.contractId}>
                                                    <td>{curElem.contractId}</td>
                                                    <td>{curElem.customer.name}</td>
                                                    <td>{curElem.customer.birthday}</td>
                                                    <td>{curElem.customer.email}</td>
                                                    <td>{curElem.customer.phoneNumber}</td>
                                                    <td>{curElem.productName}</td>
                                                    <td>{curElem.programName}</td>
                                                    <td>{curElem.dateRegister}</td>
                                                    <td>
                                                        <span
                                                            onClick={() => handleAccept(curElem.contractId)}
                                                            className="delete "
                                                            title="Delete"
                                                            data-toggle="tooltip"
                                                            style={{ color: 'green', cursor: 'pointer' }}
                                                        >
                                                            <i className="material-icons check_circle_outline">
                                                                &#xe92d;
                                                            </i>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <Link
                                                            to={`/view/${curElem.contractId}`}
                                                            className="view mx-auto"
                                                            title="View"
                                                            data-toggle="tooltip"
                                                            style={{ color: 'orange' }}
                                                        >
                                                            <i className="material-icons">&#xE417;</i>
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <span
                                                            onClick={() => handleDelete(curElem.contractId)}
                                                            className="delete"
                                                            title="Delete"
                                                            data-toggle="tooltip"
                                                            style={{ color: 'red', cursor: 'pointer' }}
                                                        >
                                                            <i className="material-icons">&#xE872;</i>
                                                        </span>
                                                    </td>
                                                </tr>
                                            }
                                        </tr>
                                    ))
                                ) : (
                                    <tr style={{ textAlign: 'center' }}>
                                        <td colSpan="10">Danh sách rỗng</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;
