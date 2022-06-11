import { useQuery, useMutation, useQueryClient } from "react-query";
import { orderApi } from '../api/orderApi';

export const useAdminOrderExist = () => {
    return useQuery("admin-order-exist", ()=>orderApi.getOders());
};
export const useAdminOrderDeteted = () => {
    return useQuery("admin-order-deleted", ()=>orderApi.getOdersDeleted());
};