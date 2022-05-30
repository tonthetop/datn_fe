/* eslint-disable dot-notation */
/* eslint-disable no-param-reassign */
/* eslint-disable */
import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:8080/";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(async(config) => {
    const token = JSON.parse(localStorage.getItem("jwt_token"));
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
        console.log(error);
        const statusCode = error.response.status;
        if (statusCode === 404) {
            window.location.href = "/not-found";
            return;
        }
        if (statusCode === 400) {
            toast.error("Bad Request \n" + error.response.data.errors[0].message);
            return;
        }
        if (statusCode === 401) {
            toast.error("Unauthorized");
            return;
        }
        if (statusCode === 403) {
            toast.error("No Permission");
            // window.location.href = '/forbi?dden';
            return;
        }
        if (statusCode === 500) {
            // show notification
            toast.error("System has an error");
            console.log("error", error);
            return;
        }
        throw error;
    }
);

export default axiosInstance;