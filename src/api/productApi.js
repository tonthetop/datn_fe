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
        const url = `/product`;
        return axiosInstance.post(url, data);
    },
    update(id, data) {
        const url = `/product/${id}`;
        return axiosInstance.put(url, data);
    },
    delete(id) {
        const url = `/product/${id}`;
        return axiosInstance.delete(url);
    },
    deleteForce(id) {
        const url = `/product/delete-force/${id}`;
        return axiosInstance.delete(url);
    },
    restore(id) {
        const url = `/product/restore/${id}`;
        return axiosInstance.get(url);
    },
    countProduct(params) {
        const url = "/product/count-product";
        return axiosInstance.get(url, { params });
    },
    cloudinaryUpload(data) {
        const url = `/product/cloudinary-upload`;
        return axiosInstance.post(url, data);
    },
};
export { productApi };