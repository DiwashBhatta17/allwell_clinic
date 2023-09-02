import axios from "axios";
import baseURL from "../../components/api";
import axiosInstance from "../Inteceptor/requestInteceptor";





async function doctorImgUpdateService(fileData) {
    try {
        const userId = sessionStorage.getItem("userId");
        const response = await axiosInstance.post(baseURL+"/doctor/upload-doctor-profile-pic/"+userId, fileData)
        return response
        
    } catch (error) {
        throw error;
        
    }
 
}

export async function doctorImgGetService(userId) {
    try {
      
      const response = await axios.get(baseURL + "/doctor/get-doctor-profile-pic/" + userId, {
        responseType: 'arraybuffer', // Specify the response type as arraybuffer
      });
  
      // Extract the image data from the response headers
      const imageBlob = new Blob([response.data], { type: response.headers['content-type'] });
  
      return imageBlob;
    } catch (error) {
      throw error;
    }
  }
  



export default doctorImgUpdateService;
