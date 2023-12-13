import axios from '../axios-customize';

export const LoginApi = async (email, password) => {
    return axios.post('/api/authentication/Login', { email, password });
};
