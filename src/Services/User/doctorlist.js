import axios from "axios";
import baseURL from "../../components/api";
import React from "react";

export async function getDoctorlist() {
  try {
    const response = await axios.get(baseURL + "/doctor/get-all-doctor");
    return response.data;
  } catch (error) {
    throw error;
  }
}
