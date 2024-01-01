import axios from '../../axios-customize';

export const InsurancesApi = () => {
    return axios.get('/InsuranceProduct');
};
export const addInsurancesApi = () => {
    return axios.post('/InsuranceProduct');
};
export const updateInsurancesApi = () => {
    return axios.post('/InsuranceProduct');
};
export const offInsurancesApi = () => {
    return axios.post('/InsuranceProduct');
};
export const getInsuranceByIdApi = (id) => {
    return axios.get(`/InsuranceProduct/${id}`);
};
