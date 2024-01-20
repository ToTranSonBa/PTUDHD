import classNames from 'classnames/bind';
import styles from './Service.module.scss';
import { useNavigate } from 'react-router-dom';
import Banner from '../../assets/image/banner-top.jpg';
import Img3 from '../../assets/image/bh3.png';
import { HomeApi } from '../../services/ApiHome/home';
import React, { useEffect, useState, useRef } from 'react';


//swiper
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

//react icon
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaArrowAltCircleRight } from 'react-icons/fa';

//image
import companylogo from '../../assets/image/Logo2.png';





const cx = classNames.bind(styles);

function Services() {
    const navigate = useNavigate();

    const [product, setProduct] = useState([]);
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
    const handleSeeMore = (id) => {
        navigate(`/service/${id}`);
    };

    const handleRegister = (id) => {
        navigate(`/register/${id}`);
    };

    const swiperRef = useRef(null);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('banner_top')} src={Banner} alt="Banner" />
                <h1 className={cx('title')}>Dịch vụ</h1>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className={cx('slider')}
            >
                {/* start slide */}
                {product && product.length > 0 ? (
                    product.map((curElem) => (
                        <SwiperSlide>
                            <article className={cx('card')}>
                                <img className={cx('card_img')} src={companylogo} alt="image" />
                                <div className={cx('card_data')}>
                                    <h2>{curElem.policyName}</h2>
                                    <span>
                                        {curElem.shortDescription.length > 20
                                            ? `${curElem.shortDescription.substring(0, 20)}...`
                                            : curElem.shortDescription}
                                    </span>
                                    <span>
                                        <button className="btn-card" onClick={() => handleSeeMore(curElem.productId)}>
                                            Xem chi tiết
                                        </button>
                                    </span>
                                    <button className="btn-card" onClick={() => handleRegister(curElem.productId)}>
                                        Mua ngay
                                    </button>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))
                ) : (
                    <div className={cx('no-products-message')}>Không có sản phẩm nào.</div>
                )}

                <div className={cx('slider-controler')}>
                    <div
                        className={cx('swiper-button-prev slider-arrow')}
                        onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
                    >
                        <FaArrowAltCircleLeft />
                    </div>
                    <div
                        className={cx('swiper-button-next slider-arrow')}
                        onClick={() => swiperRef.current && swiperRef.current.slideNext()}
                    >
                        <FaArrowAltCircleRight />
                    </div>
                    <div className={cx('swiper-pagination')}></div>
                </div>
            </Swiper>
        </div>
    );
}

export default Services;
