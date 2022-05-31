import axiosInstance from "./axiosInstance";

const productApi = {
    getProducts(params) {
        const url = "/product";
        return axiosInstance.get(url, { params });
    },
    get(id) {
        // get productID
        const url = `/product/${id}`;
        return axiosInstance.get(url);
    },
    getSizes(id) {
        // get productID
        const url = `/product/size`;
        return axiosInstance.get(url);
    },
    add(data) {
        const url = `/product/${data.id}`;
        return axiosInstance.post(url, data);
    },
    update(data) {
        const url = `/product/${data.id}`;
        return axiosInstance.patch(url, data);
    },
    remove(id) {
        const url = `/product/${id}`;
        return axiosInstance.delete(url);
    },
};
export { productApi };