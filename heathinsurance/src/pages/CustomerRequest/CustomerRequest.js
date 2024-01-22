import './CustomerRequest.scss';
import {PreviewImage} from '../../helpers/ImageHelper';
import { GetClaimRequest } from '../../services/ApiCustomerRequest/CustomerRequest';
import { useEffect, useState } from 'react';

const CustomerRequest = () => {
    const [claims, setClaim] = useState([]);
    const [claimsChange, setClaimChange] = useState(false);
    const [urlImg, setUrlImg] = useState("");
    const [isHiddenImg, setIsHiddenImg] = useState(false);

    useEffect(() => {
        const fetchClaim = async () => {
            await GetClaimRequest()
                .then((res) => {
                    setClaim(res);
                    setClaimChange(true);
                    console.log(claims);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchClaim();
        if(claims == []) {
            return setClaim([]);
        }
    }, []);
    const handleDateTimeType = (inputTimeString) => {
        // Tạo đối tượng Date từ chuỗi thời gian đầu vào
        const dateTime = new Date(inputTimeString);

        // Lấy ra giờ, phút và giây
        const hours = dateTime.getHours();
        const minutes = dateTime.getMinutes();
        const seconds = dateTime.getSeconds();

        // Lấy ra ngày, tháng và năm
        const day = dateTime.getDate(); 
        const month = dateTime.getMonth() + 1; // Tháng bắt đầu từ 0, cần cộng thêm 1
        const year = dateTime.getFullYear();

        // Định dạng lại chuỗi theo định dạng mong muốn
        const formattedTimeString = `${hours}:${minutes}:${seconds} ${day}-${month}-${year}`;
        return formattedTimeString;
    };
    const handlePreImg = (url) => {
        setUrlImg(url);
        setIsHiddenImg(false);
    }
    const handleHiddenImg = (value) => {
        setIsHiddenImg(value);
        setUrlImg("");
    }

    if (claimsChange) {
        return (
            <div>
                {!isHiddenImg && <PreviewImage hidden = {handleHiddenImg} url={urlImg}/>}
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã hợp đồng</th>
                            <th>Bảo hiểm</th>
                            <th>Ngày Gửi</th>
                            <th>Trạng thái</th>
                            <th>Hóa đơn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {claims.length > 0 ? claims.map((claim) => (
                            <tr>
                                <td>{claims.indexOf(claim) + 1}</td>
                                <td>{claim['contractId']}</td>
                                <td>{claim['productName']}</td>
                                <td>{handleDateTimeType(claim['createdDate'])}</td>
                                <td>{claim['status']}</td>
                                <td>
                                    <button className="view-button" onClick={() => handlePreImg(claim["hospitalBillAmount"])}>
                                        Xem
                                    </button>
                                </td>
                            </tr>
                        )
                        ): (
                            <tr>
                            <td colSpan="10" style={{ textAlign: 'center' }}>
                                Danh sách rỗng
                            </td>
                        </tr>
                        ) }
                    </tbody>
                </table>
                
            </div>
        ); 
    }
};

export default CustomerRequest;
