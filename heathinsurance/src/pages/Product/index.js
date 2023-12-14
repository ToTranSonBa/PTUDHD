import Header from '../../components/Layout/components/Header';
import Footer from '../../components/Layout/components/Footer';
import { Link } from 'react-router-dom';

function Product({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="container__header">
                    <h1>Sức khỏe</h1>
                </div>
                <div className="container__body">
                    <nav>
                        <li>
                            <Link to="#product_des">Mô tả sản phẩm</Link>
                        </li>
                        <li>
                            <Link to="#benifits">Quyền lợi bảo hiểm</Link>
                        </li>
                        <li>
                            <Link to="#fees">Phí bảo hiểm</Link>
                        </li>
                    </nav>

                    <h2>Bảo hiểm sức khỏe</h2>
                </div>
                <div className="content">
                    <section id="product_des">
                        <div className="general_des">
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

                        <div className="Beneficiary">
                            <h3>ĐỐI TƯỢNG ĐƯỢC BẢO HIỂM</h3>
                            <span>
                                Công dân Việt Nam hoặc người nước ngoài công tác, học tập tại Việt Nam độ tuổi từ 15
                                ngày tuổi tới 65 tuổi, bảo hiểm tối đa đến 70 tuổi nếu Người được bảo hiểm tái tục liên
                                tục tại MIC từ năm 65 tuổi loại trừ:
                            </span>
                            <span>
                                Những người bị bệnh tâm thần, bệnh phong, hội chứng down, tự kỷ
                                <br />
                                Những người bị thương tật vĩnh viễn từ 50% trở lên
                                <br />
                                Những người đang trong thời gian điều trị bệnh hoặc thương tật hoặc bị ung thư.
                            </span>
                            <span>Điều này chỉ áp dụng đối với các trường hợp tham gia bảo hiểm năm đầu tiên.</span>
                            <span>
                                - Trường hợp tham gia bảo hiểm không đúng đối tượng và điều kiện quy định trên, Mic có
                                quyền chấm dứt bảo hiểm, không chịu trách nhiệm với quyền lợi bảo hiểm đã đăng ký và
                                không hoàn phí bảo hiểm
                                <br />
                                - Trẻ em từ 15 ngày tuổi đến 06 tuổi bắt buộc mua kèm với bố/mẹ hoặc bố/mẹ đã tham gia
                                ít nhất 01 chương trình bảo hiểm sức khỏe MIC Care còn hiệu lực tại MIC và gói bảo hiểm
                                của con chỉ được áp dụng mức tương đương hoặc thấp hơn gói bảo hiểm của bố hoặc mẹ (bao
                                gồm cả điều khoản chính và điều khoản bổ sung). Trường hợp trẻ từ 15 ngày tuổi đến 06
                                tuổi muốn tham gia độc lập cần tăng phí 30%.
                                <br />- Nguyên tắc tính tuổi tham gia: Là tuổi của Người được bảo hiểm vào ngày có hiệu
                                lực của Hợp đồng bảo hiểm tính theo lần sinh nhật liền kề trước ngày Hợp đồng có hiệu
                                lực
                            </span>
                        </div>

                        <div className="country">
                            <h3>PHẠM VI LÃNH THỔ</h3>
                            <span>Việt Nam</span>
                        </div>

                        <div className="additional_term">
                            <h3>QUYỀN LỢI BẢO HIỂM BỔ SUNG</h3>
                            <span>
                                Điều trị ngoại trú do ốm đau, bệnh tật; Bảo hiểm Nha khoa; Bảo hiểm Thai sản; Tử vong,
                                thương tật toàn bộ vĩnh viễn không phải do nguyên nhân tai nạn
                            </span>
                        </div>
                        <div className="parti_procedure">
                            <h3>THỦ TỤC THAM GIA</h3>
                            <span>Khách hàng kê khai đầy đủ và trung thực theo yêu cầu của MIC.</span>
                        </div>

                        <div className="fee_guarantee">
                            <h3>BẢO LÃNH VIỆN PHÍ</h3>
                            <span>Khách hàng được bảo lãnh viện phí với gần 200 cơ sở y tế trên toàn quốc.</span>
                        </div>

                        <div className="commit">
                            <h3>CAM KẾT:</h3>
                            <span>
                                Tôi cam kết thông tin khai báo là chính xác, trung thực và hoàn toàn chịu trách nhiệm về
                                các thông tin đã khai báo. Đồng thời, tôi đã đọc, hiểu rõ và đã được Bên bảo hiểm cung
                                cấp, giải thích rõ ràng, đầy đủ điều kiện điều khoản bảo hiểm, điều khoản loại trừ bảo
                                hiểm trong Quy tắc bảo hiểm của MIC.
                            </span>
                            <span>
                                Trường hợp không có mối quan hệ với người được bảo hiểm (Vợ, chồng, cha, mẹ, con, anh
                                ruột, chị ruột, em ruột hoặc người khác có quan hệ nuôi dưỡng, cấp dưỡng hoặc người có
                                quyền lợi về tài chính hoặc quan hệ lao động) thì tôi cam kết đã được sự đồng ý của
                                người được bảo hiểm về việc tham gia chương trình bảo hiểm.
                            </span>
                            <span>
                                Trường hợp thông tin khai báo có sự sai sót, không trung thực, MIC được quyền từ chối
                                một phần hoặc toàn bộ số tiền bồi thường liên quan.
                            </span>
                        </div>
                    </section>
                    <section id="benifits">
                        <div className="policy">
                            <h3>QUYỀN LỢI BẢO HIỂM</h3>
                            <nav>
                                <li>
                                    <Link to="#copper">Chương trình Đồng</Link>
                                </li>
                                <li>
                                    <Link to="#silver">Chương trình Bạc</Link>
                                </li>
                                <li>
                                    <Link to="#gold">Chương trình Vàng</Link>
                                </li>
                                <li>
                                    <Link to="#platinum">Chương trình Bạch Kim</Link>
                                </li>
                                <li>
                                    <Link to="#diamond">Chương trình Kim Cương</Link>
                                </li>
                            </nav>
                            <div className="benifit_content">
                                <section className="copper"></section>
                            </div>
                        </div>
                        <div className="wait_payment">
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
                    <section id="fees">
                        <h3>PHÍ BẢO HIỂM</h3>
                        <span>
                            Là một chi phí định kỳ mà người tham gia bảo hiểm phải trả để duy trì quyền lợi và bảo vệ
                            trong kế hoạch bảo hiểm sức khỏe của các bạn
                        </span>
                    </section>
                </div>

                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Product;
