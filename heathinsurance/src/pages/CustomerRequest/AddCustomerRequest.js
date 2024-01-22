import './style.scss';
import React, { useState, useEffect } from 'react';
import { Image } from 'cloudinary-react';

import { GetCustomerInformation, PostClaimRequest } from '../../services/ApiCustomerRequest/CustomerRequest';
import ComboxContract from './ComboxContract';
import ImageLoad from './UploadImage';
import { ImageUpload } from '../../helpers/ImageHelper';

function AddCustomerRequest() {
    const [customer, setCustomer] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState('');
    //api
    const [hospital, setHospital] = useState('');
    const [ContractId, setContractId] = useState('');

    const handleSelectContract = (value) => {
        setContractId(value);
    };
    const handleSelectImage = (value) => {
        setImage(value);
    };
    useEffect(() => {
        const fetchCustomerInformation = async () => {
            try {
                const response = await GetCustomerInformation().then((response) => {
                    if (response.status == 401) {
                        console.log('chưa đăng nhập');
                        // return window.location.replace("/login");
                    }
                    setCustomer(response);
                    setIsLoading(false);
                });
            } catch (error) {
                console.error('Error fetching customer information:', error);
            }
        };
        fetchCustomerInformation();
    }, []);

    const postRequest = async (formdata) => {
        const resposne = await PostClaimRequest(formdata)
            .then((res) => {
                if (res.status == 201) {
                    alert('Tạo request thành công');
                }
                console.log(res.data);
            })
            .catch(alert('lỗi request'));
    };

    const handleSummitRequest = async () => {
        if (!ContractId) {
            document.querySelector('#contract-error').hidden = false;
        } else {
            document.querySelector('#contract-error').hidden = true;
        }
        if (!image) {
            document.querySelector('#img-error').hidden = false;
        } else {
            document.querySelector('#img-error').hidden = true;
        }
        if (ContractId && image) {
            const copyImg = image;
            setUrl(await ImageUpload(copyImg));
            console.log(url);
            if (url != '') {
                const formdata = {
                    ContractId: ContractId,
                    CustomerId: customer['customerId'],
                    HospitalBillAmount: url,
                };
                console.log(formdata);
                await postRequest(formdata);
            } else {
                console.log('Load Img unsuccessfully');
            }
        }
    };

    if (!isLoading) {
        return (
            // <div id="container">
            //     <h1>Gửi yêu cầu</h1>
            //     <p>Khách hàng: {customer["name"]} - customerId: {customer["customerId"]}</p>
            //     <label>Chọn bảo hiểm:</label>
            //     <ComboxContract customerId={customer["customerId"]} onSelectChange={handleSelectContract}></ComboxContract>
            //     <p id="contract-error" className="error-text" hidden>Chưa chọn bảo hiểm</p>
            //     <label>
            //         <p className="title-input">Bệnh viện: </p>
            //         <input id="input-hospital" type="text" value={hospital} onChange={(hospital) => setHospital(hospital.target.value)}/>
            //     </label>
            //     <label>Chọn ảnh hóa đơn:</label>
            //     <ImageLoad onSelectChange={handleSelectImage}></ImageLoad>
            //     <p id="img-error" className="error-text" hidden>Chưa chọn hóa đơn</p>
            //     <button onClick={handleSummitRequest}>Gửi yêu cầu</button>
            // </div>
            <div id="container" class="form-container">
                <h1>Gửi yêu cầu</h1>
                <p class="customer-info">
                    Khách hàng: {customer['name']} - ID: {customer['customerId']}
                </p>
                <label class="form-label">Chọn bảo hiểm:</label>
                <ComboxContract
                    customerId={customer['customerId']}
                    onSelectChange={handleSelectContract}
                ></ComboxContract>
                <p id="contract-error" class="error-text" hidden>
                    Chưa chọn bảo hiểm
                </p>
                <label class="form-label">
                    <p class="title-input">Bệnh viện: </p>
                    <input
                        id="input-hospital"
                        type="text"
                        value={hospital}
                        onChange={(hospital) => setHospital(hospital.target.value)}
                    />
                </label>
                <label class="form-label">Chọn ảnh hóa đơn:</label>
                <ImageLoad onSelectChange={handleSelectImage}></ImageLoad>
                <p id="img-error" class="error-text" hidden>
                    Chưa chọn hóa đơn
                </p>
                <button class="submit-button" onClick={handleSummitRequest}>
                    Gửi yêu cầu
                </button>
            </div>
        );
    }
}

export default AddCustomerRequest;
