import React,{useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import getProTypeFromApi  from "../../services/ApiProduct/getProductType";
import './Style.css'



function AddProduct() {
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [cost, setCost] = useState("");
    const [insuranceParty,setParty] = useState("");
    const [territory,setTerritory] = useState("");
    const [participationProcedure,setProcedure] = useState("");
    const [feeGuarantee,setFeeGuarantee] = useState("");
    const [commitment,setCommitment]= useState("");
    const [shortDescription,setDecription] = useState("");
    
    const [data, setData] = useState([]);
    const [BenefitType, setBenefitType] = useState("");
    const [Benefit, setBenefit] = useState("");



    const navigate = useNavigate();
    //const [image,setImg] = useState("");

    useEffect(() => {
        // Gọi hàm fetchDataFromApi từ apiService
        getProTypeFromApi.get()
          .then( (response) => {
            setData(response.data);
            
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
    }, []);

    
    console.log('data:',data);
    const selectedBenefitType = data.find(type => type.benefitTypeId === BenefitType);
    const myJSON = JSON.stringify(selectedBenefitType);
    console.log('myjs:',myJSON);
    const benefits = selectedBenefitType ? selectedBenefitType.benefits : [];
    //document.getElementById("demo") = myJSON;

    useEffect(() => {
        //console.log('selectedBenefitType:', myJSON);
        console.log('benefit:', benefits);
    }, [benefits]);

    async function addProduct()
    {
        console.warn(name,
            price,
            cost,
            insuranceParty,
            territory,
            participationProcedure,
            feeGuarantee,
            commitment,
            shortDescription)
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('cost', cost);
        formData.append('insuranceParty', insuranceParty);
        formData.append('territory', territory);
        formData.append('participationProcedure', participationProcedure);
        formData.append('feeGuarantee', feeGuarantee);
        formData.append('commitment', commitment);
        formData.append('shortDescription', shortDescription);
        let result = await fetch("https://localhost:7112/api/InsuranceProduct",{
            method: 'POST',
            body: formData
        })    
    }
    /*
  // handle input change event
    const handleInputChange = value => {
        setValue(value);
    };

    // handle selection
    const handleChange = value => {
        setSelectedValue(value);
    }

    const fetchUsers = () => {
        return  myApi.get('/users?page=1').then(result => {
        const res =  result.data.data;
        return res;
        });
    }
    const handleClick = async () => {
        try{
            //name is required
            if(!name)
            {
                toast.error('Product name is required');
                return;
            }
            
            // Price is required
            if (!price) {
                toast.error('Price is required');
                return;
            }

            // Cost is required
            if (!cost) {
                toast.error('Cost is required');
                return;
            }

            // Insurance Party is required
            if (!insuranceParty) {
                toast.error('Insurance Party is required');
                return;
            }

            // Territory is required
            if (!territory) {
                toast.error('Territory is required');
                return;
            }

            // Participation Procedure is required
            if (!participationProcedure) {
                toast.error('Participation Procedure is required');
                return;
            }

            // Fee Guarantee is required
            if (!feeGuarantee) {
                toast.error('Fee Guarantee is required');
                return;
            }

            // Commitment is required
            if (!commitment) {
                toast.error('Commitment is required');
                return;
            }

            // Short Description is required
            if (!shortDescription) {
                toast.error('Short Description is required');
                return;
            }
            const response = await AddProductApi(
                name,
                price,
                cost,
                insuranceParty,
                territory,
                participationProcedure,
                feeGuarantee,
                commitment,
                shortDescription,
            );
            if(response.response && response.response.status==='Success')
            {
                await toast.success(response.response.message + '. Please confirm your email to login!');
                navigate('/home');
            }
            else
            {
                if (response && response.status) {
                    toast.error(response.data.message);
                }
                console.log('Empty response:', response);
            }

        }
        catch(error)
        {
            console.error('Error when adding product:', error)
        }
    };
    */


    return (
        <>
            {/* <div className={('header')}>
                <img className={('banner_top')} src={Banner} alt="Banner" />
                <h1 className={('title')}>Sức khỏe</h1>
            </div> */}
            <div >
                <header/>
                {/* <div className="col-sm-6 offset-sm-3"> */}
                {/* <div className="row gy-2 gx-3 align-items-center col-auto"> */}
                <form className="row g-6">
                    <br/>
                    <label for="nameofProduct" class="form-label">Name of Product: </label>
                    <input id="nameofProduct" type="text" className="form-control" 
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="Name of product"/> <br/>

                    {/* <input type="text" className="form-control" 
                    onChange={(e)=>setImg(e.target.files[0])}
                    placeholder="Name of product"/> <br/> */}
                    <div class="row">
                        <div class="col-half">
                            <div class="input-group">
                                    <input type="text" className="form-control" 
                                    onChange={(e)=>setPrice(e.target.value)}
                                    placeholder="Price of product"/> <br/>
                            </div>
                        </div>              
                        <div class="col-half">
                            <div class="input-group">   
                                    <input type="text" className="form-control"
                                    onChange={(e)=>setCost(e.target.value)}
                                    placeholder="Cost"/> <br/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-half">
                            <input type="text" className="form-control" 
                            onChange={(e)=>setParty(e.target.value)}
                            placeholder="Insurance Party"/> 
                        </div>
                        <div class="col-half">
                            <input type="text" className="form-control"
                            onChange={(e)=>setTerritory(e.target.value)}
                            placeholder="Territory Scope"/> 
                        </div>
                    </div>
                    <input type="text" className="form-control" 
                    onChange={(e)=>setProcedure(e.target.value)}
                    placeholder="Participation Procedure"/> <br/>
                    
                    <input type="text" className="form-control" 
                    onChange={(e)=>setFeeGuarantee(e.target.value)}
                    placeholder="Guarantee Fee"/> <br/>
                    
                    <input type="text" className="form-control" 
                    onChange={(e)=>setCommitment(e.target.value)}
                    placeholder="Commitment"/> <br/>
                    
                    <input type="text" className="form-control" 
                    onChange={(e)=>setDecription(e.target.value)}
                    placeholder="Short Description"/> <br/>

                    <label htmlFor="type">Type:</label>
                    <select id="type" className="form-control" value={BenefitType} onChange={(e)=>{setBenefitType(e.target.value);  console.log(e.target.value)}}>
                    {/* <select className="form-control" value={BenefitType} > */}
                        <option value="" disabled>Inusurance Benefit Type</option>
                        {
                            data.map((user) =>(
                            //<option key={user.benefitTypeId} value={`${user.benefitTypeId},${user.name}`}>{user.name}</option>
                            <option key={user.benefitTypeId} value={user.benefitTypeId}>{user.name}</option>
                            ))
                        }                      
                    </select>
                    <br/>
                    
                    <table>
                        <tr>
                            <th>Benefit-type ID</th>
                            <th>Benefit-type Name</th>
                            <th>Add</th>
                        </tr>
                        <tr>
                            <td>youtube</td>
                            <td>kakarot</td>
                            <td><input type="checkbox" value=""></input></td>
                        </tr>
                        {                                
                            data.map((item) =>
                            (
                                <tr>
                                    <td>{item.benefitTypeId}</td>
                                    <td>{item.name}</td>
                                    <td><input type="checkbox" value={item.benefitTypeId}></input></td>
                                </tr>
                            ))
                        }
                    </table>
                    {/* <label htmlFor="benefits">Benefit:</label>
                    <select 
                        id="benefits" 
                        className="form-control" 
                        value={Benefit} 
                        onChange={(e) => {
                            // Xử lý khi benefit được chọn
                            setBenefitType(e.target.value);  console.log(e.target.value)
                        }}
                    >
                    <option value="" disabled>Select a benefit</option>
                    {benefits.map(benefit => (
                        <option key={benefit.benefitId} value={benefit.benefitId}>
                            {benefit.benefitName}
                        </option>
                    ))}
                    </select> */}

                </form>
                <div class="btn">
                    <button onClick={addProduct} class="btn-primary">Add Product</button>
                </div>    
            </div>
            
        </>  
                  
    )
}

export default AddProduct
