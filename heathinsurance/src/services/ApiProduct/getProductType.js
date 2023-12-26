import axios from 'axios';

export default axios.create({
		baseURL: 'https://localhost:7112/api/InsuranceBenefitType'
});

					//only get
// export const getProTypeFromApi = async () => {
// 	try {
// 	  const response = await axios.get('https://localhost:7112/api/InsuranceBenefitType');
// 	  return response.data;
// 	} catch (error) {
// 	  console.error("Error fetching data:", error);
// 	  throw error;
// 	}
//   };
