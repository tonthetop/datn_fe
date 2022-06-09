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
    logout() {
        const url = "/auth/logout"
        return axiosInstance.get(url);
    },
    loginWithGoogle(token) {
        const url = `/auth/login-with-google/${token}`;
        return axiosInstance.get(url);
    }
};
export { authApi };