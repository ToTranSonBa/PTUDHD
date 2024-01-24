import axios from '../axios-customize';

const AccountCustomerApi = async (email) => {
    return axios.get(`/customer/${email}`);
};

const AccountEmployeeApi = async (email) => {
    return axios.get(`/Employee/${email}`);
};

const ContractsCustomerApi = async (CustomerId, status) => {
    return axios.get(`Contract/${CustomerId}/status/${status}`);
};

const UpdateCustomerApi = async (CustomerId, customer) => {
    return axios.put(`/customer?customerId=${CustomerId}`, customer);
};

const totalFeeByYearApi = async (year) => {
    return axios.get(`/contract/invoices/report/${year}`);
};


export {
    AccountCustomerApi, ContractsCustomerApi, UpdateCustomerApi, AccountEmployeeApi, totalFeeByYearApi
};

