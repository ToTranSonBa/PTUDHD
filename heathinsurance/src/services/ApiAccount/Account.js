import axios from '../axios-customize';

const GetContractApi = async (customerId, status) => {
    return axios.get(`/Contract/${customerId}/status/${status}`);
};

const RegisterCustomerApi = async (email) => {
    return axios.get(`/customer/${email}`);
};


export {
    GetContractApi, RegisterCustomerApi
};