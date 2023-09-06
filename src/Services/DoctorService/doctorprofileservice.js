
import axios from "axios";
import baseURL from "../../components/api";
async function doctorprofileservice(doctorId) {
    try {
        const response = await axios.get(baseURL+"/doctor/get-doctor/"+doctorId)
        return response.data;
        
    } catch (error) {
        throw error;
    }
  
}

export default doctorprofileservice;
