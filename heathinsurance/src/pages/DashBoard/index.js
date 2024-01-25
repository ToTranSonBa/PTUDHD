import Doashboard from './Chart';
import ListTag from './ListTag';
import './styles.scss';
import Banner from '../../assets/image/banner-top.jpg';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
const DashBoard = () => {
    const navigate = useNavigate();
    const role = localStorage.getItem('role');
    useEffect(() => {
        if (role!=='Employee')
        {
        navigate('/');
        }
    }, []);

    return (
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)', paddingLeft: '260px' }}>
            <div className="header">
                <img style={{ borderRadius: '0' }} className="banner_top" src={Banner} alt="Banner" />
                <h1 className="title">Wellcome to doashboard</h1>
            </div>
            <div className="body">
                <div className="bodytag">
                    <ListTag></ListTag>
                </div>
                <div className="doashboard">
                    <Doashboard></Doashboard>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
