import baseURL from "../../components/api";
import axios from "axios";
// import { useHistory } from 'react-router-dom';

// Get the history object from React Router

async function asAdoctorService(data) {
  try {
    const response = await axios.post(baseURL + "/api/registers", data);
    console.log(data);
    console.log(response);
    // history.push('/otp'); // Redirect after successful response
  } catch (error) {
    throw error.response.data.message;
  }
}

export default asAdoctorService;
