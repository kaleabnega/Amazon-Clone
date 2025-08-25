import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_RENDER_URL}`,
});

export { axiosInstance };
