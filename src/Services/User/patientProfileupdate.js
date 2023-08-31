import axios from "axios";
import baseURL from "../../components/api";

async function patientProfileupdate( data) {
    try {
        const userId = sessionStorage.getItem("userId");
        const response = await axios.put(baseURL+"/patient/"+userId, data);
        return response;
        
    } catch (error) {
        throw error;
        
    }
  
}


export default patientProfileupdate
