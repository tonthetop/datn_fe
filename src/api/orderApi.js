import axiosInstance from "./axiosInstance";

const orderApi = {
    getOdersDeleted(params) {
        const url = "/order/deleted";
        return axiosInstance.get(url, { params });
    },
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
    update(id, data) {
        const url = `/order/${id}`;
        return axiosInstance.put(url, data);
    },
    delete(id) {
        const url = `/order/${id}`;
        return axiosInstance.delete(url);
    },
    restore(id) {
        const url = `/order/restore/${id}`;
        return axiosInstance.get(url);
    },
    countRevenue(params) {
        const url = "/order/count-revenue";
        return axiosInstance.get(url, { params });
    },
};
export { orderApi };