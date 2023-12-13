import axios from '../axios-customize';

export const SignupApi = async (email, password, username, phoneNumber) => {
    return axios.post('/auth/register/  ', { email, username, password });
};
