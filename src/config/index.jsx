export const API_URL = "https://reqres.in/api";

import axios from "axios";

export default axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});
