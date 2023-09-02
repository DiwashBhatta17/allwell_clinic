
import baseURL from '../../components/api';
import axios from 'axios';

 async  function patientinfoservice(appointmentid) {
    try {
        const response = await axios.get(baseURL+"/appointment/get-appointment/"+appointmentid);
        
        return response.data;

        
    } catch (error) {
        throw error;     
    }

}
export default patientinfoservice;


