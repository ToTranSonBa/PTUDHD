import React, { useEffect, useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { getInsuranceByIdApi } from '../../services/Admin/ApiInsurance/insurance';
import { useParams } from 'react-router-dom';

const DetailInsurance = () => {
    
    const navigate = useNavigate();
    const [insurance, setInsurance] = useState({});
    const { id } = useParams();
    const imageUrl = 'https://cdna.artstation.com/p/assets/images/images/057/382/630/original/gilson-junior-sephirotcloudia.gif?1671462201';
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
    const handleAdd = () => {
        //call API
        navigate(`/admin/insurances/`);
    };
    const ProgramPrice = ({ program }) => (
        <div key={program.programId}>
          <li>{program.programName}: <span>${program.price}</span></li>
        </div>
    );
    const Conditions = ({ conditions }) => (
        <div>
          <li>Conditions:
            <ul>
                {conditions.map((condition, index) => (
                <li key={index}>
                    {condition.name}: <span>{condition.question}</span> 
                </li>
                ))}
            </ul>
          </li>
          
        </div>
      );

    return (
        
        <div style={{ paddingLeft: '260px' }}>
            <div className = "card-wrapper">
                <div className = "mycard">
                    {/* card left */}
                    <div className = "product-imgs">
                        
                                    <img className="img-item"src = {imageUrl} alt = "Product Image"/>
                                
                            
                    </div>
                    {/* card right */}
                <div className = "product-content">
                    <h2 className = "product-title">{insurance.policyName}</h2>
                    
                    <div className = "product-detail">
                        <h2 className='descrip'style={{paddingBottom: '0px'}}>Description: </h2>
                        <p>{insurance.shortDescription}</p>
                        <ul>
                        <li>ID: <span>{insurance.productId}</span></li>
                        <li>Thủ tục tham gia: <span>{insurance.participationProcedure}</span></li>
                        <li>Phí đảm bảo: <span>{insurance.feeGuarantee}</span></li>
                        <li>Cam kết: <span>{insurance.commitment}</span></li>
                        <li>Bên tham gia: <span>{insurance.insuredParty}</span></li>
                        <li>Phạm vi lãnh thổ: <span>insurance.territorialScope</span></li>
                        
                        <li>Giá:
                        {insurance.programPrice &&
                        insurance.programPrice.map((program) => (
                        <ProgramPrice key={program.programId} program={program} />
                        ))}
                        </li>      
                        <Conditions conditions={insurance.conditions || []} />
                        <li>Số lượng đã bán: <span>{insurance.totalQuantitySold}</span></li>
                        </ul>
                    </div>
                </div>
                </div>
                
               
            </div>
            <div className="d-grid gap-2 col-2 mx-auto">
                    <button className="button-28" type="button" onClick={() => handleAdd()}>
                        Trở về
                    </button>      
            </div>
           
         </div> 

         
    );
};

export default DetailInsurance;
