// src/api/auth.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const signIn = (credentials) => {
  return axios.post(`${API_URL}/SigninPage`, credentials);
};
