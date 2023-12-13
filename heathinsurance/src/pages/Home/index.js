import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';

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
import Header from './../../components/Layout/components/Header/index';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}></div>
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
                <SwiperSlide>
                    <article className={cx('card')}>
                        <img className={cx('card_img')} src={companylogo} alt="image" />
                        <div className={cx('card_data')}>
                            <h2>Header</h2>
                            <span>
                                Descrption
                                <Link to="/service/abc">Xem chi tiết</Link>
                            </span>
                            <button>
                                <Link to="/register/abc">Buy now!</Link>
                            </button>
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className={cx('card')}>
                        <img className={cx('card_img')} src={companylogo} alt="image" />
                        <div className={cx('card_data')}>
                            <h2>Header</h2>
                            <span>
                                Descrption
                                <Link to="/service/abc">Xem chi tiết</Link>
                            </span>
                            <button>
                                <Link to="/register/abc">Buy now!</Link>
                            </button>
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className={cx('card')}>
                        <img className={cx('card_img')} src={companylogo} alt="image" />
                        <div className={cx('card_data')}>
                            <h2>Header</h2>
                            <span>
                                Descrption
                                <Link to="/service/abc">Xem chi tiết</Link>
                            </span>
                            <button>
                                <Link to="/register/abc">Buy now!</Link>
                            </button>
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className={cx('card')}>
                        <img className={cx('card_img')} src={companylogo} alt="image" />
                        <div className={cx('card_data')}>
                            <h2>Header</h2>
                            <span>
                                Descrption
                                <Link to="/service/abc">Xem chi tiết</Link>
                            </span>
                            <button>
                                <Link to="/register/abc">Buy now!</Link>
                            </button>
                        </div>
                    </article>
                </SwiperSlide>
                {/* end slide */}

                <div className={cx('slider-controler')}>
                    <div className={cx('swiper-button-prev slider-arrow')}>
                        <FaArrowAltCircleLeft />
                    </div>
                    <div className={cx('swiper-button-next slider-arrow')}>
                        <FaArrowAltCircleRight />
                    </div>
                    <div className={cx('swiper-pagination')}></div>
                </div>
            </Swiper>
        </div>
    );
}

export default Home;
