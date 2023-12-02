import './Login.scss'
import { useHistory } from 'react-router-dom';


const Login = (props) => {
    let history = useHistory();
    const handleCreateNewAccount = () => {
        history.push("/register");
    }
    return (
        <div className="login-container">
            <div className="container">
                <div className="row px-3 px-sm-0">
                    <div className="contain-left col-12 d-none col-sm-7 d-sm-block">
                        <div className='brand'>
                            Bảo hiểm sức khỏe
                        </div>
                        <div className='detail'>
                            Bảo hiểm sức khỏe giúp bạn có thể sử dụng được các chính sách bảo hiểm online
                        </div>
                    </div>
                    <div className="contain-right col-sm-5 col-12 d-flex flex-column gap-3 py-3 ">
                        <div className='brand d-sm-none'>
                            Bảo hiểm sức khỏe
                        </div>
                        <input className='form-control' type='text' placeholder='Email address or phone number' />
                        <input className='form-control' type='password' placeholder='Password' />
                        <button className='btn btn-primary' >login</button>
                        <span className='text-center'>
                            <a className='forgot-password' href='#'>Forget your password?</a>
                        </span>
                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={() => handleCreateNewAccount()}>
                                Create new account
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );

}

export default Login;