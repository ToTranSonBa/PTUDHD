import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Product.module.scss';
import Banner from '../../assets/image/banner-top.jpg';

const cx = classNames.bind(styles);

function Product() {
    const [activeSection, setActiveSection] = useState('product_des');
    const [activeProgram, setactiveProgram] = useState('');
    const [buttonTop, setButtonTop] = useState(0);

    const handelProductDescription = () => {
        setActiveSection('product_des');
    };

<<<<<<< Updated upstream
    //
=======
>>>>>>> Stashed changes
    const handelBenifit = () => {
        setActiveSection('benifits');
    };
    const handelFee = () => {
        setActiveSection('fees');
    };

    //program
    const programHandleCopper = () => {
        setactiveProgram('copper');
    };

    const programHandleSilver = () => {
        setactiveProgram('silver');
    };

    const programHandleGold = () => {
        setactiveProgram('gold');
    };

    const programHandlePlatinum = () => {
        setactiveProgram('platinum');
    };

    const programHandleDiamond = () => {
        setactiveProgram('diamond');
    };

    useEffect(() => {
        const handleScroll = () => {
            const content = document.querySelector('.content');
            if (content) {
                const contentRect = content.getBoundingClientRect();
                const newTop = contentRect.top > 0 ? contentRect.top : 0;
                setButtonTop(newTop);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Sử dụng [] để chỉ gọi useEffect một lần khi component được mount
    return (
        <>
            <div>
                <div
                    id={cx('dynamicButton')}
                    className={cx('sticky-box', 'btn-base')}
                    style={{ top: `${buttonTop}px` }}
                >
                    <Link to="/register/abc">Mua ngay</Link>
                </div>
                <div className={cx('header')}>
                    <img className={cx('banner_top')} src={Banner} alt="Banner" />
                    <h1 className={cx('title')}>Sức khỏe</h1>
                </div>

                <nav className={cx('navigation')}>
                    <li onClick={handelProductDescription}>
                        <Link to="">Mô tả sản phẩm</Link>
                    </li>
                    <li onClick={handelBenifit}>
                        <Link to=""> Quyền lợi bảo hiểm</Link>
                    </li>
                    <li onClick={handelFee}>
                        <Link to="">Phí bảo hiểm</Link>
                    </li>
                </nav>

                <div className={cx('content')}>
                    <h2>Bảo hiểm sức khỏe</h2>
                    <section id={cx('product_des')} className={cx({ active: activeSection === 'product_des' })}>
                        <div className={cx('general_des')}>
                            <h5>
                                Vốn quý của con người là Sức Khỏe. Đảm bảo một sức khỏe tốt sẽ giúp chúng ta an tâm thực
                                hiện những ước mơ, hoài bão.
                            </h5>
                            <h5>
                                Chính vì thế, gói bảo hiểm Health Care ra đời như một giải pháp giúp nâng cao chất lượng
                                cũng như giá trị cuộc sống. Theo đó, sản phẩm được thiết kế với mức bồi thường tối đa
                                lên tới 1.000.000.000 vnđ/người/năm
                            </h5>
                        </div>

                        <div className={cx('beneficiary')}>
                            <h3 className={cx('under-title')}>
                                <span>Đối tượng được Bảo hiểm</span>
                            </h3>
                            <span>
                                Công dân Việt Nam hoặc người nước ngoài công tác, học tập tại Việt Nam độ tuổi từ 15
                                ngày tuổi tới 65 tuổi, bảo hiểm tối đa đến 70 tuổi nếu Người được bảo hiểm tái tục liên
                                tục tại AAA từ năm 65 tuổi loại trừ:
                            </span>
                            <p>
                                - Những người bị bệnh tâm thần, bệnh phong, hội chứng down, tự kỷ
                                <br />
                                - Những người bị thương tật vĩnh viễn từ 50% trở lên
                                <br />- Những người đang trong thời gian điều trị bệnh hoặc thương tật hoặc bị ung thư.
                            </p>
                            <span>Điều này chỉ áp dụng đối với các trường hợp tham gia bảo hiểm năm đầu tiên.</span>
                            <p>
                                - Trường hợp tham gia bảo hiểm không đúng đối tượng và điều kiện quy định trên, AAA có
                                quyền chấm dứt bảo hiểm, không chịu trách nhiệm với quyền lợi bảo hiểm đã đăng ký và
                                không hoàn phí bảo hiểm
                                <br />
                                - Trẻ em từ 15 ngày tuổi đến 06 tuổi bắt buộc mua kèm với bố/mẹ hoặc bố/mẹ đã tham gia
                                ít nhất 01 chương trình bảo hiểm sức khỏe AAA Care còn hiệu lực tại AAA và gói bảo hiểm
                                của con chỉ được áp dụng mức tương đương hoặc thấp hơn gói bảo hiểm của bố hoặc mẹ (bao
                                gồm cả điều khoản chính và điều khoản bổ sung). Trường hợp trẻ từ 15 ngày tuổi đến 06
                                tuổi muốn tham gia độc lập cần tăng phí 30%.
                                <br />- Nguyên tắc tính tuổi tham gia: Là tuổi của Người được bảo hiểm vào ngày có hiệu
                                lực của Hợp đồng bảo hiểm tính theo lần sinh nhật liền kề trước ngày Hợp đồng có hiệu
                                lực
                            </p>
                        </div>

                        <div className={cx('country')}>
                            <h3 className={cx('under-title')}>
                                <span>PHẠM VI LÃNH THỔ:</span>
                            </h3>
                            <small>Việt Nam</small>
                        </div>

                        <div className={cx('additional_term')}>
                            <h3 className={cx('under-title')}>
                                <span>QUYỀN LỢI BẢO HIỂM BỔ SUNG:</span>
                            </h3>
                            <small>
                                Điều trị ngoại trú do ốm đau, bệnh tật; Bảo hiểm Nha khoa; Bảo hiểm Thai sản; Tử vong,
                                thương tật toàn bộ vĩnh viễn không phải do nguyên nhân tai nạn
                            </small>
                        </div>
                        <div className={cx('parti_procedure')}>
                            <h3 className={cx('under-title')}>
                                <span>THỦ TỤC THAM GIA:</span>
                            </h3>
                            <small>Khách hàng kê khai đầy đủ và trung thực theo yêu cầu của AAA.</small>
                        </div>

                        <div className={cx('fee_guarantee')}>
                            <h3 className={cx('under-title')}>
                                <span>BẢO LÃNH VIỆN PHÍ:</span>
                            </h3>
                            <small>Khách hàng được bảo lãnh viện phí với gần 200 cơ sở y tế trên toàn quốc.</small>
                        </div>

                        <div className={cx('commit')}>
                            <h3 className={cx('under-title')}>
                                <span>CAM KẾT:</span>
                            </h3>
                            <p>
                                Tôi cam kết thông tin khai báo là chính xác, trung thực và hoàn toàn chịu trách nhiệm về
                                các thông tin đã khai báo.
                                <br />
                                Đồng thời, tôi đã đọc, hiểu rõ và đã được Bên bảo hiểm cung cấp, giải thích rõ ràng, đầy
                                đủ điều kiện điều khoản bảo hiểm, điều khoản loại trừ bảo hiểm trong Quy tắc bảo hiểm
                                của AAA.
                                <br />
                                Trường hợp không có mối quan hệ với người được bảo hiểm (Vợ, chồng, cha, mẹ, con, anh
                                ruột, chị ruột, em ruột hoặc người khác có quan hệ nuôi dưỡng, cấp dưỡng hoặc người có
                                quyền lợi về tài chính hoặc quan hệ lao động) thì tôi cam kết đã được sự đồng ý của
                                người được bảo hiểm về việc tham gia chương trình bảo hiểm.
                                <br />
                                Trường hợp thông tin khai báo có sự sai sót, không trung thực, AAA được quyền từ chối
                                một phần hoặc toàn bộ số tiền bồi thường liên quan.
                            </p>
                        </div>
                    </section>
                    <section id={cx('benifits')} className={cx({ active: activeSection === 'benifits' })}>
                        <div className={cx('policy')}>
                            <h3 className={cx('under-title')}>
                                <span>QUYỀN LỢI BẢO HIỂM</span>
                                <small>(Click để xem chi tiết)</small>
                            </h3>
                            <nav className={cx('program')}>
                                <li onClick={programHandleCopper}>
                                    <Link to="">Chương trình Đồng</Link>
                                    <h5>
                                        <small>lên đến </small>
                                        100,000,000
                                    </h5>
                                    <h5>
                                        <small>phí từ </small>
                                        760,000VND
                                    </h5>
                                </li>
                                <li onClick={programHandleSilver}>
                                    <Link to="">Chương trình Bạc</Link>
                                    <h5>
                                        <small>lên đến </small>
                                        100,000,000
                                    </h5>
                                    <h5>
                                        <small>phí từ </small>
                                        760,000VND
                                    </h5>
                                </li>
                                <li onClick={programHandleGold}>
                                    <Link to="">Chương trình Vàng</Link>
                                    <h5>
                                        <small>lên đến </small>
                                        100,000,000
                                    </h5>
                                    <h5>
                                        <small>phí từ </small>
                                        760,000VND
                                    </h5>
                                </li>
                                <li onClick={programHandlePlatinum}>
                                    <Link to="">Chương trình Bạch Kim</Link>
                                    <h5>
                                        <small>lên đến </small>
                                        100,000,000
                                    </h5>
                                    <h5>
                                        <small>phí từ </small>
                                        760,000VND
                                    </h5>
                                </li>
                                <li onClick={programHandleDiamond}>
                                    <Link to="">Chương trình Kim Cương</Link>
                                    <h5>
                                        <small>lên đến </small>
                                        100,000,000
                                    </h5>
                                    <h5>
                                        <small>phí từ </small>
                                        760,000VND
                                    </h5>
                                </li>
                            </nav>

                            <div className={cx('toggle-tab active', { active: activeProgram === 'product_des' })}>
                                <table cellspacing="0" cellpadding="0" className={cx('table-ctr')}>
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>QUYỀN LỢI BẢO HIỂM</th>
                                            <th>
                                                <div
                                                    className={cx('item-tab active')}
                                                    data-actab-group="1"
                                                    data-actab-id="0"
                                                >
                                                    CHƯƠNG TRÌNH ĐỒNG
                                                </div>
                                                <div className={cx('item-tab')} data-actab-group="1" data-actab-id="1">
                                                    CHƯƠNG TRÌNH BẠC
                                                </div>
                                                <div className={cx('item-tab')} data-actab-group="1" data-actab-id="2">
                                                    CHƯƠNG TRÌNH VÀNG
                                                </div>
                                                <div className={cx('item-tab')} data-actab-group="1" data-actab-id="3">
                                                    CHƯƠNG TRÌNH BẠCH KIM
                                                </div>
                                                <div className={cx('item-tab')} data-actab-group="1" data-actab-id="4">
                                                    CHƯƠNG TRÌNH KIM CƯƠNG
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td className={cx('align-left')}>
                                                <strong>Phạm vi lãnh thổ</strong>
                                            </td>
                                            <td>
                                                <strong>Việt Nam</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>A</strong>
                                            </td>
                                            <td className={cx('align-left')}>
                                                <strong>ĐIỀU KHOẢN BẢO HIỂM CHÍNH</strong>
                                            </td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>I</b>
                                            </td>
                                            <td className={cx('align-left')}>
                                                <b>Tử vong/thương tật vĩnh viễn do tai nạn</b>
                                            </td>
                                            <td>
                                                <div
                                                    className={cx('item-tab active')}
                                                    data-actab-group="1"
                                                    data-actab-id="0"
                                                >
                                                    VND 100,000,000
                                                </div>
                                                <div className={cx('item-tab')} data-actab-group="1" data-actab-id="1">
                                                    VND 200,000,000
                                                </div>
                                                <div className={cx('item-tab')} data-actab-group="1" data-actab-id="2">
                                                    VND 300,000,000
                                                </div>
                                                <div className={cx('item-tab')} data-actab-group="1" data-actab-id="3">
                                                    VND 500,000,000
                                                </div>
                                                <div className={cx('item-tab')} data-actab-group="1" data-actab-id="4">
                                                    VND 1,000,000,000
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td className={cx('align-left')}>
                                                Tử vong/thương tật toàn bộ vĩnh viễn do tai nạn
                                            </td>
                                            <td>
                                                <div
                                                    className={cx('item-tab active')}
                                                    data-actab-group="1"
                                                    data-actab-id="0"
                                                >
                                                    VND 100,000,000
                                                </div>
                                                <div className={cx('item-tab')} data-actab-group="1" data-actab-id="1">
                                                    VND 200,000,000
                                                </div>
                                                <div className={cx('item-tab')} data-actab-group="1" data-actab-id="2">
                                                    VND 300,000,000
                                                </div>
                                                <div className={cx('item-tab')} data-actab-group="1" data-actab-id="3">
                                                    VND 500,000,000
                                                </div>
                                                <div className={cx('item-tab')} data-actab-group="1" data-actab-id="4">
                                                    VND 1,000,000,000
                                                </div>
                                                {/* <!--<div className={cx('item-tab"')} data-actab-group="1" data-actab-id="0">2,500,000/ngày <br /> 50,000,000/năm</div> */}
                                                <div className={cx('item-tab')} data-actab-group="1" data-actab-id="1">
                                                    5,000,000/ngày <br /> 100,000,000/năm
                                                </div>
                                                <div className={cx('item-tab')} data-actab-group="1" data-actab-id="2">
                                                    7,500,000/ngày <br /> 150,000,000/năm
                                                </div>
                                                <div className={cx('item-tab')} data-actab-group="1" data-actab-id="3">
                                                    10,000,000/ngày <br /> 200,000,000/năm
                                                </div>
                                                <div className={cx('item-tab')} data-actab-group="1" data-actab-id="4">
                                                    12,500,000/ngày <br /> 250,000,000/năm
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td className={cx('align-left')}>
                                                Thương tật bộ phận vĩnh viễn do tai nạn: Chi trả theo Bảng tỷ lệ trả
                                                tiền thương tật quy định tại quy tắc bảo hiểm Tai nạn nhóm
                                            </td>
                                            <td>
                                                <div
                                                    className={cx('item-tab active')}
                                                    data-actab-group="1"
                                                    data-actab-id="0"
                                                >
                                                    VND 30,000,000
                                                </div>
                                                <div className={cx('item-tab')} data-actab-group="1" data-actab-id="1">
                                                    VND 60,000,000
                                                </div>
                                                <div className={cx('item-tab')} data-actab-group="1" data-actab-id="2">
                                                    VND 90,000,000
                                                </div>
                                                <div className={cx('item-tab')} data-actab-group="1" data-actab-id="3">
                                                    VND 150,000,000
                                                </div>
                                                <div className={cx('item-tab')} data-actab-group="1" data-actab-id="4">
                                                    VND 300,000,000
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>II</b>
                                            </td>
                                            <td className={cx('align-left')}>
                                                <b>Chi phí y tế do tai nạn</b>
                                            </td>
                                            <td>
                                                <div
                                                    className={cx('item-tab active')}
                                                    data-actab-group="1"
                                                    data-actab-id="0"
                                                >
                                                    VND 10,000,000
                                                </div>
                                                <div className={cx('item-tab')} data-actab-group="1" data-actab-id="1">
                                                    VND 20,000,000
                                                </div>
                                                <div className={cx('item-tab')} data-actab-group="1" data-actab-id="2">
                                                    VND 30,000,000
                                                </div>
                                                <div className={cx('item-tab')} data-actab-group="1" data-actab-id="3">
                                                    VND 50,000,000
                                                </div>
                                                <div className={cx('item-tab')} data-actab-group="1" data-actab-id="4">
                                                    VND 100,000,000
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>III</b>
                                            </td>
                                            <td className={cx('align-left"')}>
                                                <b>Điều trị nội trú do ốm đau, bệnh tật/năm</b>
                                            </td>
                                            <td>
                                                <div
                                                    className={cx('item-tab active')}
                                                    data-actab-group="1"
                                                    data-actab-id="0"
                                                >
                                                    VND 35,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="1">
                                                    VND 50,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="2">
                                                    VND 100,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="3">
                                                    VND 150,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="4">
                                                    VND 200,000,000
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>1</b>
                                            </td>
                                            <td className={cx('align-left"')}>
                                                Nằm viện do ốm đau, bệnh tật/ngày (tối đa 60 ngày/năm):
                                            </td>
                                            <td>
                                                <div
                                                    className={cx('item-tab active')}
                                                    data-actab-group="1"
                                                    data-actab-id="0"
                                                >
                                                    &nbsp;
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="1">
                                                    &nbsp;
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="2">
                                                    &nbsp;
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="3">
                                                    &nbsp;
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="4">
                                                    &nbsp;
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td className={cx('align-left"')}>
                                                <p>- Tiền giường, tiền ăn theo tiêu chuẩn tại bệnh viện</p>
                                                <p>- Chi phí hành chính, chi phí máu, huyết tương</p>
                                                <p>- Thuốc và các dược phẩm sử dụng trong khi nằm viện</p>
                                                <p>- Băng, nẹp thông thường và bột</p>
                                                <p>
                                                    - Các chi phí y tế khác trong thời gian nằm viện( Bao gồm cả điều
                                                    trị trong ngày và điều trị cấp cứu có phát sinh chi phí giường được
                                                    áp dụng như điều trị trong ngày)
                                                </p>
                                            </td>
                                            <td>
                                                <div
                                                    className={cx('item-tab active')}
                                                    data-actab-group="1"
                                                    data-actab-id="0"
                                                >
                                                    Chi trả theo chi phí y tế thực tế, tối đa VND 1,750,000/ngày
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="1">
                                                    Chi trả theo chi phí y tế thực tế, tối đa VND 2,500,000/ngày
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="2">
                                                    Chi trả theo chi phí y tế thực tế, tối đa VND 5,000,000/ngày
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="3">
                                                    Chi trả theo chi phí y tế thực tế, tối đa VND 7,500,000/ngày
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="4">
                                                    Chi trả theo chi phí y tế thực tế, tối đa VND 10,000,000/ngày
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td className={cx('align-left"')}>
                                                Phẫu thuật do ốm đau, bệnh tật(bao gồm phẫu thuật nội trú, phẫu thuật
                                                trong ngày, phẫu thuật ngoại trú)
                                            </td>
                                            <td>
                                                <div
                                                    className={cx('item-tab active')}
                                                    data-actab-group="1"
                                                    data-actab-id="0"
                                                >
                                                    VND 35,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="1">
                                                    VND 50,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="2">
                                                    VND 100,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="3">
                                                    VND 150,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="4">
                                                    VND 200,000,000
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td className={cx('align-left"')}>
                                                Phẫu thuật liên quan đến cấy ghép nội tạng do ốm đau, bệnh tật (không
                                                bao gồm chi phí mua các bộ phận nội tạng và chi phí hiến các bộ phận nội
                                                tạng)
                                            </td>
                                            <td>
                                                <div
                                                    className={cx('item-tab active')}
                                                    data-actab-group="1"
                                                    data-actab-id="0"
                                                >
                                                    VND 35,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="1">
                                                    VND 50,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="2">
                                                    VND 100,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="3">
                                                    VND 150,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="4">
                                                    VND 200,000,000
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td className={cx('align-left"')}>
                                                Chi phí điều trị trước khi nhập viện (30 ngày trước khi nhập viện)
                                            </td>
                                            <td>
                                                <div
                                                    className={cx('item-tab active')}
                                                    data-actab-group="1"
                                                    data-actab-id="0"
                                                >
                                                    VND 1,750,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="1">
                                                    VND 2,500,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="2">
                                                    VND 5,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="3">
                                                    VND 7,500,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="4">
                                                    VND 10,000,000
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td className={cx('align-left"')}>
                                                Chi phí điều trị sau khi xuất viện (30 ngày kể từ ngày xuất viện)
                                            </td>
                                            <td>
                                                <div
                                                    className={cx('item-tab active')}
                                                    data-actab-group="1"
                                                    data-actab-id="0"
                                                >
                                                    VND 1,750,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="1">
                                                    VND 2,500,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="2">
                                                    VND 5,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="3">
                                                    VND 7,500,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="4">
                                                    VND 10,000,000
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td className={cx('align-left"')}>
                                                Chi phí y tá chăm sóc tại nhà sau khi xuất viện (tối đa 15 ngày/năm)
                                            </td>
                                            <td>
                                                <div
                                                    className={cx('item-tab active')}
                                                    data-actab-group="1"
                                                    data-actab-id="0"
                                                >
                                                    VND 1,750,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="1">
                                                    VND 2,500,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="2">
                                                    VND 5,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="3">
                                                    VND 7,500,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="4">
                                                    VND 10,000,000
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td className={cx('align-left"')}>
                                                Trợ cấp nằm viện/ngày (tối đa 60 ngày)
                                                <p>
                                                    (Áp dụng trường hợp điều trị tại bệnh viện công, không bao gồm khoa
                                                    điều trị tự nguyện, khoa quốc tế)
                                                </p>
                                            </td>
                                            <td>
                                                <div
                                                    className={cx('item-tab active')}
                                                    data-actab-group="1"
                                                    data-actab-id="0"
                                                >
                                                    VND 35,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="1">
                                                    VND 50,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="2">
                                                    VND 100,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="3">
                                                    VND 150,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="4">
                                                    VND 200,000
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td className={cx('align-left"')}>
                                                Dịch vụ xe cứu thương trong lãnh thổ Việt Nam, loại trừ bằng đường hàng
                                                không
                                            </td>
                                            <td>
                                                <div
                                                    className={cx('item-tab active')}
                                                    data-actab-group="1"
                                                    data-actab-id="0"
                                                >
                                                    VND 35,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="1">
                                                    VND 50,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="2">
                                                    VND 100,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="3">
                                                    VND 150,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="4">
                                                    VND 200,000,000
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td className={cx('align-left"')}>Phục hồi chức năng</td>
                                            <td>
                                                <div
                                                    className={cx('item-tab active')}
                                                    data-actab-group="1"
                                                    data-actab-id="0"
                                                >
                                                    VND 3,500,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="1">
                                                    VND 5,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="2">
                                                    VND 10,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="3">
                                                    VND 15,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="4">
                                                    VND 20,000,000
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td className={cx('align-left"')}>Trợ cấp mai táng phí</td>
                                            <td>
                                                <div
                                                    className={cx('item-tab active')}
                                                    data-actab-group="1"
                                                    data-actab-id="0"
                                                >
                                                    VND 2,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="1">
                                                    VND 2,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="2">
                                                    VND 2,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="3">
                                                    VND 2,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="4">
                                                    VND 2,000,000
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>B</strong>
                                            </td>
                                            <td className={cx('align-left"')}>
                                                <strong>ĐIỀU KHOẢN BẢO HIỂM BỔ SUNG</strong>
                                            </td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>I</b>
                                            </td>
                                            <td className={cx('align-left"')}>
                                                <strong>ĐKBS 01 - Ngoại trú do ốm đau, bệnh tật/năm</strong>
                                            </td>
                                            <td>
                                                <div
                                                    className={cx('item-tab active')}
                                                    data-actab-group="1"
                                                    data-actab-id="0"
                                                >
                                                    VND 5,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="1">
                                                    VND 7,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="2">
                                                    VND 10,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="3">
                                                    VND 15,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="4">
                                                    VND 20,000,000
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td className={cx('align-left"')}>
                                                Chi phí khám bệnh, tiền thuốc theo kê đơn của bác sỹ, chi phí cho các
                                                xét nghiệm, chụp XQ, siêu âm, chuẩn đoán hình ảnh trong việc điều trị
                                                bệnh thuộc phạm vi bảo hiểm
                                            </td>
                                            <td>
                                                <div
                                                    className={cx('item-tab active')}
                                                    data-actab-group="1"
                                                    data-actab-id="0"
                                                >
                                                    VND 1,000,000/lần khám, 10 lần khám/năm
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="1">
                                                    VND 1,400,000/lần khám, 10 lần khám/năm
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="2">
                                                    VND 2,000,000/lần khám, 10 lần khám/năm
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="3">
                                                    VND 3,000,000/lần khám, 10 lần khám/năm
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="4">
                                                    VND 4,000,000/lần khám, 10 lần khám/năm
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td className={cx('align-left"')}>Vật lý trị liệu</td>
                                            <td>
                                                <div
                                                    className={cx('item-tab active')}
                                                    data-actab-group="1"
                                                    data-actab-id="0"
                                                >
                                                    VND 50,000 đồng/lần, 30 lần/năm
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="1">
                                                    VND 70,000 đồng/lần, 30 lần/năm
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="2">
                                                    VND 100,000 đồng/lần, 30 lần/năm
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="3">
                                                    VND 150,000 đồng/lần, 30 lần/năm
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="4">
                                                    VND 200,000 đồng/lần, 30 lần/năm
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>II</td>
                                            <td className={cx('align-left"')}>
                                                <strong>ĐKBS 02 - Quyền lợi nha khoa/năm</strong>
                                            </td>
                                            <td>
                                                <div
                                                    className={cx('item-tab active')}
                                                    data-actab-group="1"
                                                    data-actab-id="0"
                                                >
                                                    VND 1,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="1">
                                                    VND 2,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="2">
                                                    VND 3,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="3">
                                                    VND 5,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="4">
                                                    VND 10,000,000
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td className={cx('align-left"')}>
                                                <p>- Khám chụp XQ</p>
                                                <p>- Viêm nướu (lợi), nha chu</p>
                                                <p>
                                                    - Trám răng bằng chất liệu thông thường như amalgam, composite,
                                                    fuji...
                                                </p>
                                                <p>- Điều trị tủy răng</p>
                                                <p>- Nhổ răng bệnh lý ( Không bao gồm phẫu thuật)</p>
                                            </td>
                                            <td>
                                                <div
                                                    className={cx('item-tab active')}
                                                    data-actab-group="1"
                                                    data-actab-id="0"
                                                >
                                                    VND 500,000/lần khám
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="1">
                                                    VND 1,000,000/lần khám
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="2">
                                                    VND 1,500,000/lần khám
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="3">
                                                    VND 2,500,000/lần khám
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="4">
                                                    VND 5,000,000/lần khám
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>III</td>
                                            <td className={cx('align-left"')}>
                                                <strong>ĐKBS 03 - Quyền lợi thai sản/năm</strong>
                                            </td>
                                            <td>
                                                <div
                                                    className={cx('item-tab active')}
                                                    data-actab-group="1"
                                                    data-actab-id="0"
                                                >
                                                    Không
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="1">
                                                    Không
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="2">
                                                    VND 10,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="3">
                                                    VND 20,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="4">
                                                    VND 30,000,000
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>a</td>
                                            <td className={cx('align-left"')}>Sinh thường</td>
                                            <td rowspan="3">
                                                Theo chi phí thực tế, tối đa không quá số tiền bảo hiểm quyền lợi thai
                                                sản
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>b</td>
                                            <td className={cx('align-left"')}>Sinh mổ</td>
                                            {/* <!-- <td></td> --> */}
                                        </tr>
                                        <tr>
                                            <td>c</td>
                                            <td className={cx('align-left"')}>Biến chứng thai sản</td>
                                            {/* <!-- <td></td> --> */}
                                        </tr>
                                        <tr>
                                            <td>IV</td>
                                            <td className={cx('align-left"')}>
                                                <strong>
                                                    ĐKBS 04 - Tử vong, thương tật toàn bộ vĩnh viễn do ốm đau, bệnh tật
                                                </strong>
                                            </td>
                                            <td>
                                                <div
                                                    className={cx('item-tab active')}
                                                    data-actab-group="1"
                                                    data-actab-id="0"
                                                >
                                                    VND 50,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="1">
                                                    VND 100,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="2">
                                                    VND 150,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="3">
                                                    VND 250,000,000
                                                </div>
                                                <div className={cx('item-tab"')} data-actab-group="1" data-actab-id="4">
                                                    VND 500,000,000
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* <div className={cx('benifit_content')}>
                                <section className={cx('copper')}></section>
                            </div> */}
                        </div>
                        <div className={cx('wait_payment')}>
                            <h3 className={cx('under-title')}>
                                <span>Thời gian chờ và đồng chi trả</span>
                            </h3>
                            <div>
                                <span>Tai nạn:</span>
                                <span>0 ngày;</span>
                            </div>
                            <div>
                                <span>Bệnh thông thường:</span>
                                <span>30 ngày;</span>
                            </div>
                            <div>
                                <span>
                                    Các bệnh hô hấp bao gồm viêm V.A cần phải nạo, viêm xoang, vẹo vách ngăn, viêm phế
                                    quản, tiểu phế quản, viêm phổi, bệnh hen/suyễn (chỉ áp dụng cho trẻ em dưới 4 tuổi:
                                </span>
                                <span>90 (chín mươi) ngày</span>
                            </div>
                            <div>
                                <span>Biến chứng thai sản:</span>
                                <span>90 (chín mươi) ngày</span>
                            </div>
                            <h5>Lưu ý: Thời gian chờ không áp dụng cho các trường hợp tái tục liên tục.</h5>
                        </div>
                    </section>
                    <section id={cx('fees')} className={cx({ active: activeSection === 'fees' })}>
                        <h3 className={cx('under-title')}>
                            <span>PHÍ BẢO HIỂM</span>
                        </h3>
                        <span>
                            Là một chi phí định kỳ mà người tham gia bảo hiểm phải trả để duy trì quyền lợi và bảo vệ
                            trong kế hoạch bảo hiểm sức khỏe của các bạn
                        </span>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Product;
