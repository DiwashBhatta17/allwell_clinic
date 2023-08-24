
import baseURL from "../../components/api";
import axios from "axios";

async function asAdoctorService(data) {
    const response = await axios.post(baseURL+'/api/')
  console.log(data)
}

export default asAdoctorService;
