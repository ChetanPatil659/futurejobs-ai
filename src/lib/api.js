import axios from "axios";

export const ApiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_BASE_URL,
  headers: { "Content-Type": "application/json" },
});
