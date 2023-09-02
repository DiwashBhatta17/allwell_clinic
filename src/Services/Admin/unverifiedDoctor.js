import { useState } from "react";
import baseURL from "../../components/api";
import axios from "axios";
import axiosInstance from "../Inteceptor/requestInteceptor";



async function unverifiedDoctor() {
    try {
        const response = await axios.get(baseURL+"/doctor/list-unverified-doctor");
        return response.data;
        
    } catch (error) {
        throw error;
        
    }
 
}

export async function verifyDoctor(doctorId){
    try {
        const response = await axiosInstance.post(baseURL+"/api/doctor-verify/"+doctorId);
        return response;

        
    } catch (error) {
        throw error
        
    }
}

export default unverifiedDoctor
