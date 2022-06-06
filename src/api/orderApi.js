import axiosInstance from "./axiosInstance";

const orderApi = {
    getOders(params) {
        const url = "/order";
        return axiosInstance.get(url, { params });
    },
    get(id) {
        // get oderID
        const url = `/order/${id}`;
        return axiosInstance.get(url);
    },
    getOrderByEmailOrPhone(data) {
        // get oderID
        const url = `/order/get-by-email-or-phone`;
        return axiosInstance.post(url, data);
    },
    add(data) {
        const url = `/order`;
        return axiosInstance.post(url, data);
    },
    update(data) {
        const url = `/order/${data.id}`;
        return axiosInstance.patch(url, data);
    },
    remove(id) {
        const url = `/order/${id}`;
        return axiosInstance.delete(url);
    },
};
export { orderApi };