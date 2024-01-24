import axios from "axios"

const jwt = localStorage.getItem("token");

const GetClaimPayment = (status) => {
    return axios.get(`https://localhost:7112/api/claim/payment`, {
        headers: {
            Authorization: "Bearer" + jwt
        }
    });
}

export {GetClaimPayment};