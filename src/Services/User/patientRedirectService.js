import React from 'react'
import baseURL from '../../components/api';
import axios from 'axios';

async function patientRedirectService(id) {
  try {
    const response = await axios.get(baseURL+"/doctor/get-doctor/"+id);
    return response.data;
    
  } catch (error) {
    throw error;
    
  }
}

export default patientRedirectService
