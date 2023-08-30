import axios from "axios"
import baseURL from "../../components/api"

async function doctorupdateform(doctorId, data) {
    try {
        const response = await axios.put(baseURL+"/doctor/update-doctor/"+doctorId , data)
        return response;

        
    } catch (error) {
        throw error;
        
    }
 
}

export default doctorupdateform
