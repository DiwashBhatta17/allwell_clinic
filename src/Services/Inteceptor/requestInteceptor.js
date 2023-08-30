import axios from 'axios';
import React from 'react';
import { Route, Router, useNavigate } from 'react-router-dom';
import { logoutsuccess } from '../../components/State/slice/counterSlice';
import { useDispatch } from 'react-redux';


const axiosInstance = axios.create();




axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  
  response => {
      return response;
  },(error)=>{
    if (
      error.response.status === 403
    ) {
      Route.push('/login'); 
      useDispatch(logoutsuccess()); 
      return Promise.reject(error);
    }

  }
)

export default axiosInstance;
