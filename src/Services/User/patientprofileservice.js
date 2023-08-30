
import axios from 'axios';
import baseURL from '../../components/api';
import axiosInstance from '../Inteceptor/requestInteceptor';




async function patientprofileservice() {
   try {
    const userId = sessionStorage.getItem("userId");
    const response = await axiosInstance.get(baseURL+"/patient/"+ userId);
    return response.data
    
   } catch (error) {
    throw error;
    
   }

 
}

export default patientprofileservice

