import baseURL from "../../components/api";
import axios from "axios";



async function RegisterService(data) {
  try {
    const response = await axios.post(baseURL + "/api/patient-register", data);
    console.log(data);
    console.log(response);
  } catch (error) {
    throw error.response.data.message;
  }
}

export default RegisterService;
