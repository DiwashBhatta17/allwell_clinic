import axios from 'axios'
import baseURL from '../../../components/api';
import axiosInstance from "/Users/diwonsigdel/Downloads/allwell_clinic/src/Services/Inteceptor/requestInteceptor";


async function doctordashboardservice(id) {
    try {
        const response = await axiosInstance.get(baseURL+'/appointment/doctor/'+id);
        return response.data;
        
    } catch (error) {
        throw error
        
    }
  
}
export default doctordashboardservice;
