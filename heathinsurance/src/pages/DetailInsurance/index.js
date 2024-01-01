import React, { useEffect, useState } from 'react';
import './styles.css';
import ImageUpload from './imageUpload';
import { getInsuranceByIdApi } from '../../services/Admin/ApiInsurance/insurance';
import { useParams } from 'react-router-dom';

const DetailInsurance = () => {
    const [insurance, setInsurance] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('check>>', id);
                const response = await getInsuranceByIdApi(id);
                console.log('check>>', response);
                setInsurance(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id]);

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
                    <form>
                        <div className="row">
                            <label htmlFor="productName">Tên Bảo Hiểm</label>
                            <input type="text" id="productName" name="name" value={insurance.policyName} />
                        </div>
                        <div className="row">
                            <label htmlFor="productPrice">Price</label>
                            <input type="number" id="productPrice" name="price" value={100} />
                        </div>
                        <div className="row">
                            <label htmlFor="productDescription">Description</label>
                            <textarea id="productDescription" name="description" value={insurance.shortDescription} />
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
