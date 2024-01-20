import axios from '../../axios-customize';

export const benefitsApi = () => {
    return axios.get('/InsuranceBenefitType');
};
export const addIBenefitApi = () => {
    return axios.post('/InsuranceBenefitType');
};
export const updateBenefitApi = () => {
    return axios.post('/InsuranceBenefitType');
};
export const getBenefitByIdApi = (id) => {
    return axios.get(`/InsuranceBenefitType/${id}`);
};
