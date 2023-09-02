import axios from "axios";
import baseURL from "../../components/api";
import React from "react";
import axiosInstance from "../Inteceptor/requestInteceptor";


export async function getDoctorlist() {
  try {
    const response = await axiosInstance.get(baseURL + "/doctor/list-all-doctor");
    return response.data;
  } catch (error) {
    throw error;
  }
}
