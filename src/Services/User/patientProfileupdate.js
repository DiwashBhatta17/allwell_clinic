import axios from "axios";
import baseURL from "../../components/api";
import axiosInstance from "../Inteceptor/requestInteceptor";


async function patientProfileupdate( data) {
    try {
        const userId = sessionStorage.getItem("userId");
        const response = await axiosInstance.put(baseURL+"/patient/"+userId, data);
        return response;
        
    } catch (error) {
        throw error;
        
    }
  
}


export default patientProfileupdate
