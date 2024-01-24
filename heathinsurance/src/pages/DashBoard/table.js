import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RegistersApi } from '../../services/Admin/ApiRegister/register';
import './table.scss';
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
        <>
            <div class="row_table">
                <div class="table-responsive ">
                    <table class="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>ID </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Số hợp đồng đăng kí</th>
                            </tr>
                        </thead>
                        <tbody>
                            {register && register.length > 0 ? (
                                register.map((curElem) => (
                                    <tr key={curElem.contractId}>
                                        <td>{curElem.customer.customerId}</td>
                                        <td>{curElem.customer.name}</td>
                                        <td>{curElem.customer.email}</td>
                                        <td>{curElem.customer.numbercontractregister}</td>

                                        <td style={{ textAlign: 'center' }}>
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
        </>
    );
}

export default Table;
