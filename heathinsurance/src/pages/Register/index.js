import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Register.module.scss';
import Banner from '../../assets/image/banner-top.jpg';

//icon
import { RiHealthBookFill } from 'react-icons/ri';
import { GiHealthNormal } from 'react-icons/gi';

const cx = classNames.bind(styles);

function Register() {
    const [activeSection, setActiveSection] = useState('information_insurance');

    //
    const handelProductDescription = () => {
        setActiveSection('information_insurance');
    };
    const handelHeathInfor = () => {
        setActiveSection('information_heath');
    };

    return (
        <>
            <div className={cx('header')}>
                <img className={cx('banner_top')} src={Banner} alt="Banner" />
                <h1 className={cx('title')}>Sức khỏe</h1>
            </div>
            <div className={cx('content_container')}>
                <div className={cx('left_container')}>
                    <nav className={cx('navigation')}>
                        <li onClick={handelProductDescription}>
                            <Link to="">Thông tin bảo hiểm</Link>
                        </li>
                        <li onClick={handelHeathInfor}>
                            <Link to="">Tình trạng sức khỏe</Link>
                        </li>
                    </nav>

                    <div className={cx('content')}>
                        {/* thông tin bảo hiểm */}
                        <section
                            id={cx('information_insurance')}
                            className={cx({ active: activeSection === 'information_insurance' })}
                        >
                            <div className={cx('scope')}>
                                <div className={cx('title_form', 'under_title')}>
                                    <GiHealthNormal />
                                    <h2>Phạm vi bảo hiểm</h2>
                                </div>
                                <div className={cx('insurance_duration')}>
                                    <div>
                                        <span>Thời hạn BH từ</span>
                                        <input type="date" />
                                    </div>
                                    <div>
                                        <span>Đến</span>
                                        <input type="date" />
                                    </div>
                                </div>
                                <div className={cx('insurance_policy')}>
                                    <span>Chương trình</span>
                                </div>
                                <div className={cx('main_terms')}>
                                    <div>
                                        <input type="checkbox"></input>
                                        <span>Tử vong/ thương tật vĩnh viễn do tai nạn</span>
                                        <input type="text" value="100,00VNĐ" />
                                    </div>
                                    <div>
                                        <input type="checkbox"></input>
                                        <span>Chi phí y tế do tai nạn</span>
                                        <input type="text" value="100,00VNĐ" />
                                    </div>
                                    <div>
                                        <input type="checkbox"></input>
                                        <span>Điều trị nội trú do ốm đau, bệnh tật, biến chứng thai sản</span>
                                        <input type="text" value="100,00VNĐ" />
                                    </div>
                                </div>

                                <div className={cx('additional_terms')}>
                                    <div>
                                        <input type="checkbox"></input>
                                        <span>Điều trị ngoại trú do ốm đau, bệnh tật</span>
                                        <input type="text" value="100,00VNĐ" />
                                    </div>
                                    <div>
                                        <input type="checkbox"></input>
                                        <span>Quyền lợi nha khoa</span>
                                        <input type="text" value="100,00VNĐ" />
                                    </div>
                                    <div>
                                        <input type="checkbox"></input>
                                        <span>Tử vong, thương tật toàn bộ vĩnh viễn không do nguyên nhân tai nạn</span>
                                        <input type="text" value="100,00VNĐ" />
                                    </div>
                                </div>

                                <div className={cx('fee')}>
                                    <span>Phí</span>
                                    <input type="text" value="600,000VND" />
                                </div>
                            </div>

                            <div className={cx('health_status')}>
                                <div className={cx('title_form', 'under_title')}>
                                    <RiHealthBookFill />
                                    <h2>Thông tin tình trạng sức khỏe</h2>
                                </div>
                                <span className={cx('standard_labed', 'form-group', 'row')}>
                                    <strong>
                                        <u>Câu 1: </u>
                                    </strong>
                                    &nbsp; Người được bảo hiểm có thuộc các trường hợp dưới đây hay không?
                                    <br />
                                    <span style={{ paddingLeft: '40px' }}>
                                        {' '}
                                        - Những người bị bệnh tâm thần, bệnh phong, hội chứng down, tự kỷ;{' '}
                                    </span>
                                    <span style={{ paddingLeft: '40px' }}>
                                        {' '}
                                        - Những người bị thương tật vĩnh viễn từ 50% trở lên;{' '}
                                    </span>
                                    <span style={{ paddingLeft: '40px' }}>
                                        {' '}
                                        - Những người đang trong thời gian điều trị bệnh hoặc thương tật hoặc bị ung
                                        thư.
                                    </span>
                                    <span>
                                        {' '}
                                        Điều này chỉ áp dụng đối với các trường hợp tham gia bảo hiểm năm đầu tiên.
                                    </span>
                                </span>
                                <div className={cx('form-inline')} style={{ justifyContent: 'center' }}>
                                    <div className={cx('form-inline')}>
                                        <input
                                            type="checkbox"
                                            id="ctl00_ContentPlaceHolder1_ckC"
                                            className={cx('css_checkbox')}
                                            onchange="bhhd_ngsk_TT(this)"
                                        />
                                        <span className={cx('form-check-label')} style={{ paddingRight: '200px' }}>
                                            Có
                                        </span>
                                    </div>
                                    <div className={cx('form-inline', 'mx-md-3')}>
                                        <input
                                            type="checkbox"
                                            id="ctl00_ContentPlaceHolder1_ckK"
                                            className={cx('css_checkbox', 'form-check-input')}
                                            style={{ paddingLeft: '200px' }}
                                            onchange="bhhd_ngsk_TT(this)"
                                            checked="checked"
                                        />
                                        <span className={cx('form-check-label')}>Không</span>
                                    </div>
                                </div>
                                <span className={cx('standard_labed', 'form-group')}>
                                    <strong>
                                        <u></u>
                                    </strong>
                                    <p>
                                        <strong>
                                            <u>Câu 2:</u>
                                        </strong>
                                        &nbsp;Trong vòng 3 năm qua, Người được bảo hiểm đã từng được chẩn đoán, xuất
                                        hiện triệu chứng phải đi khám, điều trị hay đã được chuyên gia y tế khuyên Người
                                        được bảo hiểm phải điều trị hay không?
                                    </p>
                                </span>
                                <span className={cx('standard_labed', 'form-group', 'row')}>
                                    <strong>
                                        <u>Lưu ý: </u>
                                    </strong>
                                    &nbsp;Người được bảo hiểm không trả lời ‘CÓ” đối với các bệnh/ tình trạng y tế dưới
                                    đây:
                                    <span style={{ paddingLeft: '40px' }}>
                                        {' '}
                                        - Phụ nữ sinh con (sinh thường, sinh mổ) mà không có biến chứng thai sản;
                                    </span>
                                    <span style={{ paddingLeft: '40px' }}>
                                        {' '}
                                        - Cúm và cảm lạnh theo mùa thông thường, viêm dạ dày cấp tính, viêm ruột thừa
                                        cấp tính, viêm amidan cấp tính, nhiễm trùng đường tiết niệu, bệnh tả, thương
                                        hàn, sốt xuất huyết mà Người được bảo hiểm đã được điều trị và đã hồi phục hoàn
                                        toàn hoặc nếu Người được bảo hiểm sử dụng bất kỳ loại thực phẩm bổ sung sức khỏe
                                        tổng quát nào.
                                    </span>
                                </span>
                                <div className={cx('form-inline')} style={{ justifyContent: 'center' }}>
                                    <div className={cx('form-inline')}>
                                        <input
                                            type="checkbox"
                                            id="ctl00_ContentPlaceHolder1_ccC"
                                            className={cx('css_checkbox')}
                                            onchange="bhhd_ngsk_TT2(this)"
                                        />
                                        <span className={cx('form-check-label')} style={{ paddingRight: '200px' }}>
                                            Có
                                        </span>
                                    </div>
                                    <div className={cx('form-inline', 'mx-md-3')}>
                                        <input
                                            type="checkbox"
                                            id="ctl00_ContentPlaceHolder1_ccK"
                                            className={cx('css_checkbox', 'form-check-input')}
                                            onchange="bhhd_ngsk_TT2(this)"
                                            style={{ paddingLeft: '200px' }}
                                            checked="checked"
                                        />
                                        <span className={cx('form-check-label')}>Không</span>
                                    </div>
                                </div>
                                <div
                                    className={cx('form-wrap', ' row')}
                                    id={cx('Upa_mota_benh')}
                                    style={{ display: 'none' }}
                                >
                                    <span style={{ paddingLeft: '17px' }}>
                                        {' '}
                                        Nếu câu trả lời là có, yêu cầu mô tả chi tiết thời gian, tình trạng bệnh tật,
                                        thương tật đã/đang điều trị:
                                    </span>
                                    <div className={cx('form-group', 'col-sm-12')}>
                                        <span className={cx('input_label', 'col_15', 'iterm_form')}>Mô tả</span>
                                        <div className={cx('input-group')}>
                                            <textarea
                                                name="ctl00$ContentPlaceHolder1$mota_benh"
                                                rows="2"
                                                cols="20"
                                                id="ctl00_ContentPlaceHolder1_mota_benh"
                                                className={cx('css_nd', ' form-control')}
                                                ten_goc="mota_benh"
                                                onkeyup="nd_up(event)"
                                                placeholder="-- Mô tả chi tiết thời gian, tình trạng bệnh tật, thương tật đã/đang điều trị(nếu có) --"
                                                onfocus="contro_select(this);"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                <span className={cx('standard_labed', 'form-group', 'row')} style={{ display: 'none' }}>
                                    3. Người được bảo hiểm có mắc một hay các bệnh: bệnh ung thư, u bướu các loại, huyết
                                    áp, tim mạch, viêm/loét dạ dày, viêm khớp, viêm gan (A,B,C), sỏi các loại trong hệ
                                    thống bài tiết, viêm xoang, đái tháo đường, hen phế quản, viêm thận, thoái hóa
                                    xương, trĩ, bệnh liên quan đến hệ thống tái tạo máu như lọc máu, thay máu, Parkinson
                                </span>
                                <div className={cx('form-inline')} style={{ display: 'none' }}>
                                    <div className={cx('form-inline')}>
                                        <input
                                            type="checkbox"
                                            id="ctl00_ContentPlaceHolder1_cuC"
                                            className={cx('css_checkbox')}
                                            onchange="bhhd_ngsk_TT3(this)"
                                        />
                                        <span className={cx('form-check-label')}>Có</span>
                                    </div>
                                    <div className={cx('form-inline', 'mx-md-3')}>
                                        <input
                                            type="checkbox"
                                            id="ctl00_ContentPlaceHolder1_cuK"
                                            checked="checked"
                                            onchange="bhhd_ngsk_TT3(this)"
                                            className={cx('css_checkbox', ' form-check-input')}
                                        />
                                        <span className={cx('form-check-label')}>Không</span>
                                    </div>
                                </div>

                                <button
                                    style={{ margin: '5px' }}
                                    className={cx('declare_heathy')}
                                    onClick={handelHeathInfor}
                                >
                                    <Link to="">Khai báo tình trạng sức khỏe</Link>
                                </button>
                                {/* <div
                                    className={cx('form-inline', ' button-bill', 'declare_heathy')}
                                    style={{ justifyContent: 'center' }}
                                >
                                    <div
                                        id="QPa_thanhtoans"
                                        className={cx('btn', 'mic-btn-base', 'tt_ac css_tab_ngang_de')}
                                        style={{ margin: '5px' }}
                                    >
                                        <div id="UPa_thanhtoans" onclick="bhhd_ngskK_khaibao()">
                                            Khai báo tình trạng sức khỏe
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            {/* <div>
                                    <h3>Câu 1:</h3>
                                    <span>Người được bảo hiểm có thuộc các trường hợp dưới đây hay không? </span>
                                    <p>
                                        - Những người bị bệnh tâm thần, bệnh phong, hội chứng down, tự kỷ;
                                        <br></br> - Những người bị thương tật vĩnh viễn từ 50% trở lên;<br></br> - Những
                                        người đang trong thời gian điều trị bệnh hoặc thươngtật hoặc bị ung thư.
                                    </p>
                                    <span>
                                        Điều này chỉ áp dụng đối với các trường hợp tham gia bảo hiểm năm đầu tiên.
                                    </span>
                                    <div>
                                        <div>
                                            <input type="checkbox"></input>
                                            <span>Có</span>
                                        </div>
                                        <div>
                                            <input type="checkbox"></input>
                                            <span>Không</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3>Câu 2:</h3>
                                    <span>
                                        Trong vòng 3 năm qua, Người được bảo hiểm đã từng được chẩn đoán, xuất hiện
                                        triệu chứng phải đi khám, đi ều trị hay đã được chuyên gia y tế khuyên Người
                                        được bảo hiểm phải điều trị hay không?{' '}
                                    </span>
                                </div>

                                <div>
                                    <h3>Lưu ý:</h3>
                                    <span>
                                        Người được bảo hiểm không trả lời ‘CÓ” đối với các bệnh/ tình trạng y tế dưới
                                        đây:{' '}
                                    </span>
                                    <p>
                                        - Phụ nữ sinh con (sinh thường, sinh mổ) mà không có biến chứng thai sản;
                                        <br></br> - Cúm và cảm lạnh theo mùa thông thường, viêm dạ dày cấp tính, viêm
                                        ruột thừa cấp tính, viêm amidan cấp tính, nhiễm trùng đường tiết niệu, bệnh tả,
                                        thương hàn, sốt xuất huyết mà Người được bảo hiểm đã được điều trị và đã hồi
                                        phục hoàn toàn hoặc nếu Người được bảo hiểm sử dụng bất kỳ loại thực phẩm bổ
                                        sung sức khỏe tổng quát nào.
                                    </p>
                                    <div>
                                        <div>
                                            <input type="checkbox"></input>
                                            <span>Có</span>
                                        </div>
                                        <div>
                                            <input type="checkbox"></input>
                                            <span>Không</span>
                                        </div>
                                    </div>
                                    <button className={cx('declare_heathy')} onClick={handelHeathInfor}>
                                        <Link to="">Khai báo tình trạng sức khỏe</Link>
                                    </button>
                                </div> */}
                        </section>

                        {/* tình trạng sức khỏe */}
                        <section
                            id={cx('information_heath')}
                            className={cx({ active: activeSection === 'information_heath' })}
                        >
                            <div
                                className="tab-pane item-tab fade show block-post active"
                                id={cx('UPa_ks')}
                                role="tabpanel"
                                aria-labelledby="sk-tab"
                                // onmouseup="bhhd_ngskKM_KTRA()"
                            >
                                <div className={cx('title-form')}>
                                    <span>THÔNG TIN VỀ TÌNH TRẠNG SỨC KHỎE</span>
                                </div>
                                <table cellspacing="0" cellpadding="0" className={cx('table-ctr')}>
                                    <tbody>
                                        <tr>
                                            <th width="50px">STT</th>
                                            <th width="70%">Bạn có mắc phải những bệnh dưới đây không?</th>
                                            <th>Có</th>
                                        </tr>
                                        <tr>
                                            <td colspan="3" style={{ fontWeight: 'bold' }}>
                                                Bệnh hệ thần kinh
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1</td>

                                            <td id="bb1C" className={cx('r-align-text')}>
                                                <span
                                                    id={cx('ctl00_ContentPlaceHolder1_lsb1')}
                                                    tenkieu="gchu"
                                                    ten_goc="lsb1"
                                                    kieu_unicode="C"
                                                    kt_xoa="X"
                                                >
                                                    Viêm hệ thần kinh trung ương (Não)
                                                </span>
                                            </td>
                                            <td>
                                                <input type="checkbox" className={cx('css_checkbox')} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td id="bb2C" className={cx('r-align-text')}>
                                                <span
                                                    id="ctl00_ContentPlaceHolder1_lsb2"
                                                    tenkieu="gchu"
                                                    ten_goc="lsb2"
                                                    kieu_unicode="C"
                                                    kt_xoa="X"
                                                >
                                                    Parkinson, Alzheimer
                                                </span>
                                            </td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    id="ctl00_ContentPlaceHolder1_tt2C"
                                                    className={cx('css_checkbox')}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td id="bb3C" className={cx('r-align-text')}>
                                                <span
                                                    id="ctl00_ContentPlaceHolder1_lsb3"
                                                    tenkieu="gchu"
                                                    ten_goc="lsb3"
                                                    kieu_unicode="C"
                                                    kt_xoa="X"
                                                >
                                                    Thoái hóa khác của hệ thần kinh
                                                </span>
                                            </td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    id="ctl00_ContentPlaceHolder1_tt3C"
                                                    className={cx('css_checkbox')}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td id="bb4C" className={cx('r-align-text')}>
                                                <span
                                                    id="ctl00_ContentPlaceHolder1_lsb4"
                                                    tenkieu="gchu"
                                                    ten_goc="lsb4"
                                                    kieu_unicode="C"
                                                    kt_xoa="X"
                                                >
                                                    Mất trí nhớ, hôn mê, bại não, liệt
                                                </span>
                                            </td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    id="ctl00_ContentPlaceHolder1_tt4C"
                                                    className={cx('css_checkbox')}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td id="bb5C" className={cx('r-align-text')}>
                                                <span
                                                    id="ctl00_ContentPlaceHolder1_lsb5"
                                                    tenkieu="gchu"
                                                    ten_goc="lsb5"
                                                    kieu_unicode="C"
                                                    kt_xoa="X"
                                                >
                                                    Bỏng dưới độ III
                                                </span>
                                            </td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    id="ctl00_ContentPlaceHolder1_tt5C"
                                                    className={cx('css_checkbox')}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td id="bb6C" className={cx('r-align-text')}>
                                                <span
                                                    id="ctl00_ContentPlaceHolder1_lsb6"
                                                    tenkieu="gchu"
                                                    ten_goc="lsb6"
                                                    kieu_unicode="C"
                                                    kt_xoa="X"
                                                >
                                                    Bỏng nặng từ độ III trở lên
                                                </span>
                                            </td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    id="ctl00_ContentPlaceHolder1_tt6C"
                                                    className={cx('css_checkbox')}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td id="bb7C" className={cx('r-align-text')}>
                                                <span
                                                    id="ctl00_ContentPlaceHolder1_lsb7"
                                                    tenkieu="gchu"
                                                    ten_goc="lsb7"
                                                    kieu_unicode="C"
                                                    kt_xoa="X"
                                                >
                                                    Hội chứng Apallic
                                                </span>
                                            </td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    id="ctl00_ContentPlaceHolder1_tt7C"
                                                    className={cx('css_checkbox')}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td id="bb8C" className={cx('r-align-text')}>
                                                <span
                                                    id="ctl00_ContentPlaceHolder1_lsb8"
                                                    tenkieu="gchu"
                                                    ten_goc="lsb8"
                                                    kieu_unicode="C"
                                                    kt_xoa="X"
                                                >
                                                    Phẫu thuật não
                                                </span>
                                            </td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    id="ctl00_ContentPlaceHolder1_tt8C"
                                                    className={cx('css_checkbox')}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td id="bb9C" className={cx('r-align-text')}>
                                                <span
                                                    id="ctl00_ContentPlaceHolder1_lsb9"
                                                    tenkieu="gchu"
                                                    ten_goc="lsb9"
                                                    kieu_unicode="C"
                                                    kt_xoa="X"
                                                >
                                                    Viêm màng não, viêm não do virus
                                                </span>
                                            </td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    id="ctl00_ContentPlaceHolder1_tt9C"
                                                    className={cx('css_checkbox')}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td id="bb10C" className={cx('r-align-text')}>
                                                <span
                                                    id="ctl00_ContentPlaceHolder1_lsb10"
                                                    tenkieu="gchu"
                                                    ten_goc="lsb10"
                                                    kieu_unicode="C"
                                                    kt_xoa="X"
                                                >
                                                    Bệnh tế bảo thân kinh vận động
                                                </span>
                                            </td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    id="ctl00_ContentPlaceHolder1_tt10C"
                                                    className={cx('css_checkbox')}
                                                />
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>II </td>
                                            <td>
                                                <b>
                                                    Bệnh khác{' '}
                                                    <span style={{ color: 'red' }}>
                                                        (Chỉ ghi kết luận trong vòng 3 năm gần đây)
                                                    </span>
                                                </b>
                                                <input
                                                    type="text"
                                                    id="ctl00_ContentPlaceHolder1_bkhactxt"
                                                    className="css_ma form-control"
                                                    onfocus="contro_select(this);"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    id="ctl00_ContentPlaceHolder1_bkhac"
                                                    className={cx('css_checkbox')}
                                                    onchange="bhhd_bt_benhkhac_CHECK()"
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* <span className={cx('title-form')}>Thông tin về tình trạng sức khỏe</span>
                            <table className={cx('information_heath_table')}>
                                <tbody>
                                    <tr>
                                        <th>STT</th>
                                        <th>Bạn có mắc phải những bệnh dưới đây không?</th>
                                        <th>Có</th>
                                    </tr>
                                    <tr>
                                        <td>Bệnh hệ thần kinh</td>
                                    </tr>
                                    <tr>
                                        <th>1</th>
                                        <th>Viêm hệ thần kinh trung ương</th>
                                        <th>
                                            <input type="checkbox" />
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <th>Parkinson, Alzheimer</th>
                                        <th>
                                            <input type="checkbox" />
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <th>Thoái hóa khác của hệ thần kinh</th>
                                        <th>
                                            <input type="checkbox" />
                                        </th>
                                    </tr>
                                    {/* bệnh hệ hô hấp */}
                            {/* <tr>
                                        <td>Bệnh hệ hô hấp</td>
                                    </tr>
                                    <tr>
                                        <th>1</th>
                                        <th>Suy phổi</th>
                                        <th>
                                            <input type="checkbox" />
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <th>Phẫu thuật cắt 1 bên phổi</th>
                                        <th>
                                            <input type="checkbox" />
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <th>Tăng áp động mạch phổi</th>
                                        <th>
                                            <input type="checkbox" />
                                        </th>
                                    </tr>
                                </tbody>
                            </table> */}
                        </section>
                    </div>
                </div>

                <div className={cx('bill')}>
                    <h1>Thông tin phí bảo hiểm</h1>
                    <hr />
                    <div className={cx('row', 'align-center')}>
                        <div className={cx('col', 'column', 'regular-font')}>
                            <label id={cx('lblphi')}>Phí:</label>
                        </div>
                        <div className={cx('col', 'column', 'align-right')}>
                            <span id={cx('phi_tien_phi')} tenkieu="gchu" ten_goc="tien_phi" kieu_unicode="C" kt_xoa="K">
                                0
                            </span>
                            <span id={cx('vndphi')} className={cx('price')}>
                                {' '}
                                VND
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className={cx('row', 'align-center')}>
                        <div className={cx('col', 'column', 'regular-font')}>
                            <label id={cx('lblphi')}>Tổng phí:</label>
                        </div>
                        <div className={cx('col', 'column', 'align-right')}>
                            <span id={cx('phi_tien_phi')} tenkieu="gchu" ten_goc="tien_phi" kieu_unicode="C" kt_xoa="K">
                                0
                            </span>
                            <span id={cx('vndphi')} className={cx('price')}>
                                {' '}
                                VND
                            </span>
                        </div>
                    </div>
                    <hr />
                    <button className={cx('pay-btn')}>
                        <Link to="/payment/abc">Thanh toán</Link>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Register;
