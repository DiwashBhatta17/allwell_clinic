import axios from "axios";
import baseURL from "../../components/api";

async function getReportsService(appointmentId) {
    try {
        const response = await axios.get(baseURL+"/reports/get-report-pic/"+appointmentId,
        {
            responseType: "arraybuffer", // Specify the response type as arraybuffer
          }
        );
    
        const imageBlob = new Blob([response.data], {
          type: response.headers["content-type"],
        });
    
        return imageBlob;
        
        
    } catch (error) {
        throw error;
        
    }
  
}

export default getReportsService;
