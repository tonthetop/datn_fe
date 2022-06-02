import axiosInstance from "./axiosInstance";

const authApi = {
    login(data) {
        const url = `/auth/login`;
        return axiosInstance.post(url, data);
    },
    resetAccount(data) {
        const url = `/auth/reset-account`;
        return axiosInstance.post(url, data);
    },
};
export { authApi };