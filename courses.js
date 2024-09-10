// src/api/courses.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/courses";

export const getCourses = (token) => {
  return axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
