import baseURL from "../../components/api";
import axios from "axios";





async function otpService(data) {
   
   
    try {
      

        const response = await axios.post(baseURL + '/api/verify', data, {
            headers: {
                'Content-Type': 'application/json' // Set the content type to JSON
            }
        });


        console.log("Request Data:", data);
        console.log("Response:", response.data);
        
    } catch (error) {
        throw error;
        console.log(error);
    }

 
}

export default otpService;
