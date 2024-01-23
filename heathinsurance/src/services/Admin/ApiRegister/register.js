import axios from '../../axios-customize';

const jwt = localStorage.getItem("token");

export const RegistersApi = () => {
    return axios.get('/Contract');
};
export const RegistersWithStatusApi = (status) => {
    return axios.get(`/Contract/Status?status=${status}`);
};
export const RegistersUpdateStatusApi = (contractId, status) => {
    return axios.post(`/Contract/updateStatus?contractId=${contractId}&status=${status}`, null, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    });
};
export const acceptRegistersApi = (id) => {
    return axios.get('/Contract');
};
export const rejectRegistersApi = (id) => {
    return axios.get('/Contract');
};
export const DetailRegistersApi = (id) => {
    return axios.get(`/Contract/ContractId?Id=${id}`);
};
