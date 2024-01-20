import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';
import './ListCard.css';
import { useNavigate } from 'react-router-dom';
import { HomeApi } from '../../services/ApiHome/home';

const ListCard = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);

    const handleSeeMore = (id) => {
        navigate(`/service/${id}`);
    };

    const handleRegister = (id) => {
        navigate(`/register/${id}`);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await HomeApi();
                setProduct(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="container-list wrapper">
            {product && product.length > 0 ? (
                product.map((curElem) => (
                    <div className="card_item" key={curElem.productId}>
                        <div className="card_inner">
                            <div className="image">
                                <Image
                                    cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
                                    publicId={curElem.imageUrl}
                                />
                            </div>
                            <div className="name">{curElem.policyName}</div>
                            <div className="detail-box">
                                <span className="description">
                                    {curElem.shortDescription.length > 20
                                        ? `${curElem.shortDescription.substring(0, 20)}...`
                                        : curElem.shortDescription}
                                </span>
                            </div>
                            <button className="btn-card" onClick={() => handleSeeMore(curElem.productId)}>
                                Xem chi tiết
                            </button>
                            <button className="btn-card" onClick={() => handleRegister(curElem.productId)}>
                                Mua ngay
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <div className="no-products-message">Không có bảo hiểm nào.</div>
            )}
        </div>
    );
};

export default ListCard;
