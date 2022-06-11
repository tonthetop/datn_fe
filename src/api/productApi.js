import axiosInstance from "./axiosInstance";

const productApi = {
    getProductsDeleted() {
        const url = "/product/deleted";
        return axiosInstance.get(url);
    },
    getAll() {
        const url = "/product/getAll";
        return axiosInstance.get(url);
    },
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
    update(id, data) {
        const url = `/product/${id}`;
        return axiosInstance.put(url, data);
    },
    remove(id) {
        const url = `/product/${id}`;
        return axiosInstance.delete(url);
    },
};
export { productApi };