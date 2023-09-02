import axios from "axios";
import baseURL from "../../components/api";

async function uploadAfile(reportId, fileData) {
    try {
        
        const response = await axios.post(baseURL+"/reports/upload-report-pic/"+reportId, fileData)
        return response;
        
    } catch (error) {
        throw error;
        
    }
 
}

export async function createReport(appointmentId){
    try {
        const response = await axios.post(baseURL+"/reports/create-report/"+appointmentId);
        return response.data;
        
    } catch (error) {
        throw error;
       
        
    }
    
}
export default uploadAfile;