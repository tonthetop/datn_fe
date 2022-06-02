import axiosInstance from "./axiosInstance";

const accountApi = {
    getAccounts(params) {
        const url = "/account";
        return axiosInstance.get(url, { params });
    },
    get(id) {
        // get accountID
        const url = `/account/${id}`;
        return axiosInstance.get(url);
    },
    add(data) {
        const url = `/account/login`;
        return axiosInstance.post(url, data);
    },
    add(data) {
        const url = `/account`;
        return axiosInstance.post(url, data);
    },
    update(data) {
        const url = `/account/${data.id}`;
        return axiosInstance.patch(url, data);
    },
    remove(id) {
        const url = `/account/${id}`;
        return axiosInstance.delete(url);
    },
};
export { accountApi };