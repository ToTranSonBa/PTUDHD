import React, { useState } from 'react';
import './styles.css';
import ImageUpload from './imageUpload';

const DetailInsurance = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Product:', product);
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
                            <label htmlFor="productPrice">Price</label>
                            <input
                                type="number"
                                id="productPrice"
                                name="price"
                                value={product.price}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="row">
                            <label htmlFor="productDescription">Description</label>
                            <textarea
                                id="productDescription"
                                name="description"
                                value={product.description}
                                onChange={handleChange}
                            />
                        </div>
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

export default DetailInsurance;
