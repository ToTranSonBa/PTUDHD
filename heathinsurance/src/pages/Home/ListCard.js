import React, { useEffect } from 'react';
import axios from 'axios';
import Img from '../../assets/image/bh1.jpg';
import Img2 from '../../assets/image/bh2.jpg';
import Img3 from '../../assets/image/bh3.png';
import './ListCard.css';
import { useNavigate } from 'react-router-dom';

const ServicesData = [
    {
        id: 1,
        img: Img,
        name: 'Biryani',
        description: 'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.',
    },
    {
        id: 2,
        img: Img2,
        name: 'Chiken kari',
        description: 'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet',
    },
    {
        id: 3,
        img: Img3,
        name: 'Cold Cofee',
        description: 'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet',
    },
    {
        id: 4,
        img: Img3,
        name: 'Cold Cofee',
        description:
            'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametLorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet',
    },
    {
        id: 5,
        img: Img3,
        name: 'Cold Cofee',
        description: 'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet',
    },
    {
        id: 6,
        img: Img2,
        name: 'Cold Cofee',
        description: 'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet',
    },
];
const ListCard = () => {
    const navigate = useNavigate();

    const handleSeeMore = (id) => {
        navigate(`/service/${id}`);
    };

    const handleRegister = (id) => {
        navigate(`/register/${id}`);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7112/api/InsuraceProgram');
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="container-list wrapper">
            {ServicesData.map((curElem) => (
                <div className="card_item" key={curElem.id}>
                    <div className="card_inner">
                        <div className="image">
                            <img src={curElem.img} alt="" />
                        </div>
                        <div className="name">{curElem.name}</div>
                        <div className="detail-box">
                            <span className="description">{curElem.description}</span>
                        </div>
                        <button className="btn-card" onClick={() => handleSeeMore(curElem.id)}>
                            Xem chi tiết
                        </button>
                        <button className="btn-card" onClick={() => handleRegister(curElem.id)}>
                            Mua ngay
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListCard;
