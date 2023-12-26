import axios from "../axios-customize";

export const AddProduct = async (
    name,
    price,
    cost,
    insuranceParty,
    territory,
    participationProcedure,
    feeGuarantee,
    commitment,
    shortDescription,
) => {
    return axios.post('/InsuranceProduct',
    {
        name,
        price,
        cost,
        insuranceParty,
        territory,
        participationProcedure,
        feeGuarantee,
        commitment,
        shortDescription, 
    });
};