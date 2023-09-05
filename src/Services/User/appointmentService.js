import axios from "axios";
import baseURL from "../../components/api";
import axiosInstance from "../Inteceptor/requestInteceptor";


async function appointmentService(data, patientid, doctorid) {
    try {
        const response = await axiosInstance.post(baseURL+"/appointment/patient/"+patientid+"/doctor/"+ doctorid, data);
        return response.data;
        
    } catch (error) {
        throw error;     
    }
 
}
 export async function appointmentServicerandom(data, patientid) {
    try {
        const response = await axiosInstance.post(baseURL+"/appointment/patient/"+patientid, data);
        return response.data;
        
    } catch (error) {
        throw error;     
    }
 
}

export default appointmentService;
