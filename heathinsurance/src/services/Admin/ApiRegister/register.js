import axios from '../../axios-customize';

const jwt = localStorage.getItem('token');

export const RegistersApi = () => {
    return axios.get('/Contract');
};
export const RegistersWithStatusApi = async (status) => {
    return axios.get(`/Contract/Status?status=${status}`);
};
export const RegistersUpdateStatusApi = async (contractId, status) => {
    return axios.post(`/Contract/updateStatus?contractId=${contractId}&status=${status}`, null, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
        .catch(error => {
            if (error.response && error.response.status === 403) {
                console.error("Lỗi 403 Forbidden:", error);
                // Handle 403 Forbidden error here (display a message, log out, etc.)
                // Example: displayErrorMessage("Access Forbidden. Please log in again.");
            } else {
                throw error; // Throw the error for other status codes
            }
        });
};
export const acceptRegistersApi = async (id) => {
    return axios.get('/Contract');
};
export const rejectRegistersApi = async (id) => {
    return axios.get('/Contract');
};
export const DetailRegistersApi = async (id) => {
    return axios.get(`/Contract/ContractId?Id=${id}`);
};
