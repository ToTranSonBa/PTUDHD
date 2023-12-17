import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function RegisterInsurance({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="container__header">
                    <h1>Sức khỏe</h1>
                </div>
                <div className="container__body__left">
                    <nav>
                        <li>
                            <Link to="#information_insurance">Thông tin bảo hiểm</Link>
                        </li>
                        <li>
                            <Link to="#information_heath">Tình trạng sức khỏe</Link>
                        </li>
                    </nav>
                </div>
                <div className="content">
                    {/* thông tin bảo hiểm */}
                    <section id="information_insurance">
                        <div className="scope">
                            <h2 className="title_form">Phạm vi bảo hiểm</h2>
                            <div className="insurance_duration">
                                <div>
                                    <span>Thời hạn BH từ</span>
                                    <input type="date" />
                                </div>
                                <div>
                                    <span>Đến</span>
                                    <input type="date" />
                                </div>
                            </div>
                            <div className="insurance_policy">
                                <span>Chương trình</span>
                            </div>
                            <div className="main_terms">
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

                            <div className="additional_terms">
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

                            <div className="fee">
                                <span>Phí</span>
                                <input type="text" value="600,000VND" />
                            </div>
                        </div>

                        <div className="health_status">
                            <h2 className="title_form">Thông tin tình trạng sức khỏe</h2>
                            <div>
                                <h3>Câu 1:</h3>
                                <span>Người được bảo hiểm có thuộc các trường hợp dưới đây hay không? </span>
                                <p>
                                    - Những người bị bệnh tâm thần, bệnh phong, hội chứng down, tự kỷ;
                                    <br></br> - Những người bị thương tật vĩnh viễn từ 50% trở lên;<br></br> - Những
                                    người đang trong thời gian điều trị bệnh hoặc thươngtật hoặc bị ung thư.
                                </p>
                                <span>Điều này chỉ áp dụng đối với các trường hợp tham gia bảo hiểm năm đầu tiên.</span>
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
                                    Trong vòng 3 năm qua, Người được bảo hiểm đã từng được chẩn đoán, xuất hiện triệu
                                    chứng phải đi khám, điều trị hay đã được chuyên gia y tế khuyên Người được bảo hiểm
                                    phải điều trị hay không?{' '}
                                </span>
                            </div>

                            <div>
                                <h3>Lưu ý:</h3>
                                <span>
                                    Người được bảo hiểm không trả lời ‘CÓ” đối với các bệnh/ tình trạng y tế dưới đây:{' '}
                                </span>
                                <p>
                                    - Phụ nữ sinh con (sinh thường, sinh mổ) mà không có biến chứng thai sản;
                                    <br></br> - Cúm và cảm lạnh theo mùa thông thường, viêm dạ dày cấp tính, viêm ruột
                                    thừa cấp tính, viêm amidan cấp tính, nhiễm trùng đường tiết niệu, bệnh tả, thương
                                    hàn, sốt xuất huyết mà Người được bảo hiểm đã được điều trị và đã hồi phục hoàn toàn
                                    hoặc nếu Người được bảo hiểm sử dụng bất kỳ loại thực phẩm bổ sung sức khỏe tổng
                                    quát nào.
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
                                <button>
                                    <Link to="#information_heath">Khai báo tình trạng sức khỏe</Link>
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* tình trạng sức khỏe */}
                    <section id="information_heath">
                        <div className="title-form">Thông tin về tình trạng sức khỏe</div>
                        <table className="information_heath_table">
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
                                <tr>
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
                        </table>
                    </section>
                </div>
                <div className="container__body__right">
                    <h1>Thông tin phí bảo hiểm</h1>
                    <div>
                        <span>Phí</span>
                        <input type="text" value="0 VNĐ"></input>
                    </div>

                    <button>
                        <Link to="/payment/abc">Thanh toán</Link>
                    </button>
                </div>

                {children}
            </div>
            <Footer />
        </div>
    );
}

export default RegisterInsurance;
