import axiosClient from "./axiosClient";

const productApi = {
    getProducts(params) {
        const url = "/product";
        return axiosClient.get(url, { params });
    },
    get(id) {
        // get productID
        const url = `/product/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = `/product/${data.id}`;
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/product/${data.id}`;
        return axiosClient.patch(url, data);
    },
    remove(id) {
        const url = `/product/${id}`;
        return axiosClient.delete(url);
    },
};
export { productApi };