import axios from "axios";
import baseURL from "../../components/api";

async function doctorHistoryservice(doctorId) {
    try {
        const response = await axios.get(baseURL+"/appointment/get-appointment-history/doctor/"+doctorId);
        return response.data;

        
    } catch (error) {
        throw error
        
    }
  
}

export default doctorHistoryservice;
