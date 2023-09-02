import axios from "axios"
import baseURL from "../../components/api"
import axiosInstance from "../Inteceptor/requestInteceptor";


async function doctorupdateform(doctorId, data) {
    try {
        const response = await axiosInstance.put(baseURL+"/doctor/update-doctor/"+doctorId , data)
        return response;

        
    } catch (error) {
        throw error;
        
    }
}

export default doctorupdateform
