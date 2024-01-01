import axios from '../axios-customize';

const RegisterProductApi = async () => {
    return axios.get(`/InsuranceProduct/${3}`);
};

const RegisterCustomerApi = async (email) => {
    return axios.get(`/customer/${email}`);
};

const RegisterContractApi = async (productId, programId, startDay, toDay, totalPrice, paymentMethod, customer, healthConditions) => {
    return axios.post(`/Contract`, { productId, programId, startDay, toDay, totalPrice, paymentMethod, customer, healthConditions });
};

export {
    RegisterProductApi, RegisterCustomerApi, RegisterContractApi
};