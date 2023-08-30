import axios from 'axios'
import baseURL from '../../../components/api';

async function doctordashboardservice(id) {
    try {
        const response = await axios.get(baseURL+'/appointment/doctor/'+id);
        return response.data;
        
    } catch (error) {
        throw error
        
    }
  
}
export default doctordashboardservice;
