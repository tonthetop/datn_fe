import axiosInstance from "./axiosInstance";

const discountApi = {
    getDiscounts() {
        const url = "/discount";
        return axiosInstance.get(url);
    },
    get(id) {
        // get discountID
        const url = `/discount/${id}`;
        return axiosInstance.get(url);
    },
    add(data) {
        const url = `/discount`;
        return axiosInstance.post(url, data);
    },
    update(id, data) {
        const url = `/discount/${id}`;
        return axiosInstance.put(url, data);
    },
    delete(id) {
        const url = `/discount/${id}`;
        return axiosInstance.delete(url);
    },
    restore(id) {
        const url = `/discount/restore/${id}`;
        return axiosInstance.get(url);
    },
};
export { discountApi };