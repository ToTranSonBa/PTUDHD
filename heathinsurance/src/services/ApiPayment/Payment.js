import axios from '../axios-customize';

export const PaymentApi = async () => {
    return axios.post('/payment/momo-payment', {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};