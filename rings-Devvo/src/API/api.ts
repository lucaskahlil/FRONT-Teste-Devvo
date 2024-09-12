import axios from "axios";

export const api = axios.create({
  baseURL: "urlbackend",
  headers: {
    "Content-Type": "application/json",
  },
});
