/* eslint-disable dot-notation */
/* eslint-disable no-param-reassign */
/* eslint-disable */
import axios from "axios";
import { toast } from "react-toastify";

 const BASE_URL = "http://localhost:8080/";
//const BASE_URL = "http://21.253.65.9:8080/"
const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(async (config) => {
    const token = JSON.parse(localStorage.getItem("user"))?.tokenAccess;
    config.headers = {
        "Content-Type": "application/json",
    };
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => {
        if (response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        const statusCode = error.response.status;
        if (statusCode === 400) {
            toast.error(`Bad Request: ${error.response.data.errors[0].message}`);
        }
        if (statusCode === 401) {
            toast.error("Unauthorized");
        }
        if (statusCode === 403) {
            toast.error("No Permission");
        }
        if (statusCode === 404) {
            toast.error("NotFound");
        }
        if (statusCode === 409) {
            toast.error("Conflict: " + error.response.data.errors[0].message);
        }
        if (statusCode === 500) {
            toast.error("System Error: Something error");
        }
        throw error;
    }
);

export default axiosInstance;