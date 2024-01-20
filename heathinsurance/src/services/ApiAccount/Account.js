import axios from '../axios-customize';

const AccountCustomerApi = async (email) => {
    return axios.get(`/customer/${email}`);
};

const ContractsCustomerApi = async (CustomerDd, status) => {
    return axios.get(`Contract/${CustomerDd}/status/${status}`);
};

export {
    AccountCustomerApi, ContractsCustomerApi
};