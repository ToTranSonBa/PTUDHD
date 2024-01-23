import axios from '../axios-customize';

const AccountCustomerApi = async (email) => {
    return axios.get(`/customer/${email}`);
};

const ContractsCustomerApi = async (CustomerId, status) => {
    return axios.get(`Contract/${CustomerId}/status/${status}`);
};

const UpdateCustomerApi = async (CustomerId, customer) => {
    return axios.put(`/customer?customerId=${CustomerId}`, customer);
};

export {
    AccountCustomerApi, ContractsCustomerApi, UpdateCustomerApi
};