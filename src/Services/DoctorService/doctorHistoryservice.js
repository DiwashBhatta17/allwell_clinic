import axios from "axios";
import baseURL from "../../components/api";
import axiosInstance from "../Inteceptor/requestInteceptor";


async function doctorHistoryservice(doctorId) {
    try {
        const response = await axiosInstance.get(baseURL+"/appointment/get-appointment-history/doctor/"+doctorId);
        return response.data;

        
    } catch (error) {
        throw error
        
    }
  
}

export default doctorHistoryservice;
