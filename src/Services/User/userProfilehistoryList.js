import axios from "axios";
import baseURL from "../../components/api";


async function userProfilehistoryList(patientId) {
    try {
        const response = await axios.get(baseURL+"/appointment/patient/"+patientId)
        return response.data
        
    } catch (error) {
        throw error;
        
    }
  
}

export default userProfilehistoryList

