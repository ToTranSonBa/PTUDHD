import React, { useState } from 'react';
import './styles.css';
import ImageUpload from './imageUpload';
import Select from 'react-select';

const conditions = [
    {
        name: 'Bị tâm thần, bệnh phong, bệnh/hội chứng down, tự kỷ.',
        quesion: '',
    },
    {
        name: 'Thương tật vĩnh viễn từ 50% trở lên',
        quesion: '',
    },
    {
        name: 'Bị ung thư và/ hoặc đang trong quá trình điều trị bệnh/thương tật',
        quesion: '',
    },
];
const benefit = [
    {
        name: 'Tử vong và Thương tật vĩnh viễn do Tai nạn',
        benefits: [
            {
                benefitName: 'Tử vong hoặc thương tật vĩnh viễn do tai nạn thông thường',
                description: 'test',
            },
            {
                benefitName:
                    'Tử vong hoặc thương tật vĩnh viễn do tai nạn trên chuyến bay thường lệ hoặc phương tiện giao thông công cộng',
                description: 'test2',
            },
            {
                benefitName: 'Thương tật bộ phận vĩnh viễn',
                description: 'test3',
            },
        ],
    },
    {
        name: 'Test',
        benefits: [
            {
                benefitName: 'data1',
                description: 'test',
            },
            {
                benefitName: 'data2',
                description: 'test2',
            },
            {
                benefitName: 'data3',
                description: 'test3',
            },
            {
                benefitName: 'data4',
                description: 'test3',
            },
        ],
    },
];
const AddInsurance = () => {
    const [product, setProduct] = useState({
        name: 'Nike Shoes',
        price: 23,
        description: 'UI/UX designing, html css tutorials',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const [selectedConditions, setSelectedConditions] = useState([]);

    const handleCheckboxChange = (selected) => {
        setSelectedConditions(selected);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Product:', product);
        console.log('Selected Conditions:', selectedConditions);
    };

    const options = conditions.map((condition) => ({
        value: condition.name,
        label: condition.name,
    }));

    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };
    return (
        <div style={{ paddingLeft: '260px' }}>
            <div style={{ height: '100px', width: '100%', textAlign: 'center', marginTop: '50px' }}>
                <span style={{ fontSize: '25px', color: 'green', paddingTop: '50px', fontWeight: 'bold' }}>
                    Thêm Bảo Hiểm
                </span>
            </div>
            <div className="details">
                <div className="big-img" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ImageUpload />
                </div>
                <div className="box">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <label htmlFor="productName">Tên Bảo Hiểm</label>
                            <input
                                type="text"
                                id="productName"
                                name="name"
                                value={product.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="row">
                            <label htmlFor="insuredParty">Đối tượng được sử dụng bảo hiểm</label>
                            <input
                                type="text"
                                id="insuredParty"
                                name="insuredParty"
                                value={product.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="row">
                            <label htmlFor="insuredParty">Phạm vi</label>
                            <input
                                type="text"
                                id="insuredParty"
                                name="insuredParty"
                                value={product.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="row">
                            <label htmlFor="insuredParty">participationProcedure</label>
                            <input
                                type="text"
                                id="insuredParty"
                                name="insuredParty"
                                value={product.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="row">
                            <label htmlFor="insuredParty">feeGuarantee</label>
                            <input
                                type="text"
                                id="insuredParty"
                                name="insuredParty"
                                value={product.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="row">
                            <label htmlFor="insuredParty">commitment</label>
                            <input
                                type="text"
                                id="insuredParty"
                                name="insuredParty"
                                value={product.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="row">
                            <label htmlFor="productDescription">Mô tả</label>
                            <textarea
                                id="productDescription"
                                name="description"
                                value={product.description}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="row">
                            <label style={{ marginRight: '10px' }}>Chọn điều kiện:</label>
                            <Select isMulti value={selectedOption} onChange={handleSelectChange} options={options} />
                        </div>

                        <div className="row">
                            <label htmlFor="productPrice">Thêm Giá Tiền Chương Trình: </label>
                            <label htmlFor="productPrice">Đồng</label>
                            <input
                                type="number"
                                id="productPrice"
                                name="price"
                                value={product.price}
                                onChange={handleChange}
                            />
                            <label htmlFor="productPrice">Bạc</label>
                            <input
                                type="number"
                                id="productPrice"
                                name="price"
                                value={product.price}
                                onChange={handleChange}
                            />
                            <label htmlFor="productPrice">Vàng</label>
                            <input
                                type="number"
                                id="productPrice"
                                name="price"
                                value={product.price}
                                onChange={handleChange}
                            />
                            <label htmlFor="productPrice">Bạch Kim</label>
                            <input
                                type="number"
                                id="productPrice"
                                name="price"
                                value={product.price}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="row">
                            <label htmlFor="productPrice">Price</label>
                            <input
                                type="number"
                                id="productPrice"
                                name="price"
                                value={product.price}
                                onChange={handleChange}
                            />
                        </div>
                        {/* Danh sách các loại benefit */}
                        {/*danh sách các benefit của nó để chọn*/}
                        {/* và nhập giá từng benefit */}

                        <div className="row">
                            <button type="submit" className="add">
                                <span style={{ fontWeight: 'bold', color: 'white', fontSize: '15px' }}>
                                    Thêm Bảo Hiểm
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddInsurance;
