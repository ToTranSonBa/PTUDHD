import axios from '../../axios-customize';

export const InsurancesApi = () => {
    return axios.get('/InsuranceProduct');
};
export const addInsurancesApi = (
    policyName,
    insuredParty,
    territorialScope,
    participationProcedure,
    feeGuarantee,
    commitment,
    shortDescription,
    imageUrl,
    conditions,
    programPrices,
    benefitTypes,
) => {
    return axios.post('/InsuranceProduct', {
        policyName,
        insuredParty,
        territorialScope,
        participationProcedure,
        feeGuarantee,
        commitment,
        shortDescription,
        imageUrl,
        conditions,
        programPrices,
        benefitTypes,
    });
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
