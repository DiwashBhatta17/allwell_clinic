import axios from "axios";
import baseURL from "../../components/api";
import axiosInstance from "../Inteceptor/requestInteceptor";

async function profileImgUpdateService(fileData) {
    try {
        const userId = sessionStorage.getItem("userId");
        const response = await axiosInstance.post(baseURL+"/patient/upload-patient-profile-pic/"+userId, fileData)
        return response
        
    } catch (error) {
        throw error;
        
    }
    
}

export async function profileImgGetService() {
    try {
      const userId = sessionStorage.getItem("userId");
      const response = await axiosInstance.get(baseURL + "/patient/get-patient-profile-pic/" + userId, {
        responseType: 'arraybuffer', // Specify the response type as arraybuffer
      });
  
      // Extract the image data from the response headers
      const imageBlob = new Blob([response.data], { type: response.headers['content-type'] });
  
      return imageBlob;
    } catch (error) {
      throw error;
    }
  }
  



export default profileImgUpdateService
