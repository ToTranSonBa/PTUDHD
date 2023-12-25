import axios from '../axios-customize';

const RegisterProductApi = async () => {
    return axios.get(`/InsuranceProduct/${1}`);
};

export {
    RegisterProductApi
};