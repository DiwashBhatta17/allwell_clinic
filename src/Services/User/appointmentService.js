import axios from "axios";
import baseURL from "../../components/api";


async function appointmentService(data, patientid, doctorid) {
    try {
        const response = await axios.post(baseURL+"/appointment/patient/"+patientid+"/doctor/"+ doctorid, data);
        return response.data;
        
    } catch (error) {
        throw error;     
    }
 
}

export default appointmentService;
