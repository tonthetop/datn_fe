import { useQuery } from "react-query";
import { productApi } from '../api/productApi';

export const useAdminProductExist = () => {
    return useQuery("admin-product-exist", () => productApi.getAll());
};
export const useAdminProductDeteted = () => {
    return useQuery("admin-product-deleted", () => productApi.getProductsDeleted());
};