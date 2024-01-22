import axios from '../axios-customize';

const jwt = localStorage.getItem("token");

const GetCustomerInformation = () => {    
    return axios.get("/customer/getinformation", {
        headers:{
            Authorization: "Bearer " + jwt,
        }
    });
}
const  PostClaimRequest = (formData) => {
    return  axios.post("https://localhost:7112/api/claim", formData, {
        headers: {
            Authorization: "Bearer " + jwt
        }
    })
}

const GetClaimRequest = () => {
    return  axios.get(`/customer/claim`, {
        headers: {
            Authorization: "Bearer " + jwt
        }
    })
}
export {
    GetCustomerInformation, PostClaimRequest, GetClaimRequest
}