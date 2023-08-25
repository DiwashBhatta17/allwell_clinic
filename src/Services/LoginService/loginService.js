import axios from "axios";
import baseURL from "../../components/api";

async function loginService(data) {
    try {
        const response = await axios.post(baseURL+'/api/login',data);
        console.log(response);
        
    } catch (error) {
        throw error;
        
    }
    

  
}

export default loginService;
