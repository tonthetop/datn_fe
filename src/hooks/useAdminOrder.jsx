import { useQuery, useMutation, useQueryClient } from "react-query";
import { productApi } from "../api";
import { orderApi } from '../api/orderApi';
import { getTotalPrice } from "../utils/getTotalPrice";

export const useAdminOrderExist = () => {
    return useQuery("admin-order-exist", () => orderApi.getOders(), {
        select: (data) => {
            let _data = data.map((e, index) => {
                return {
                    key: index,
                    currentStatus:[...e.orderStatus].pop()?.status,
                    currentStatusDescription:[...e.orderStatus].pop()?.description,
                    clientName: e.accountId.name,
                    clientPhone: e.accountId.phone || "",
                    totalPrice: getTotalPrice(e.productList),
                    clientEmail: e.accountId.email.split('@').join(' @'),
                    ...e
                }
            })
            return _data
        }
    });
};
export const useAdminOrderDeteted = () => {
    return useQuery("admin-order-deleted", () => orderApi.getOdersDeleted(), {
        select: (data) => {
            let _data = data.map((e, index) => {
                return {
                    key: index,
                    currentStatus: e.orderStatus.pop()?.status,
                    clientName: e.accountId.name,
                    clientPhone: e.accountId.phone || "",
                    totalPrice: getTotalPrice(e.productList),
                    clientEmail: e.accountId.email.split('@').join(' @'),
                    ...e
                }
            })
            return _data
        }
    });
};
export const useUpdateAdminOrder = () => {
    const queryClient = useQueryClient();
    return useMutation(data => orderApi.update(data.order._id, data.values), {
        onMutate: async (data) => {
            console.log({ data })
            // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
            await queryClient.cancelQueries('admin-product-exist')
            // Snapshot the previous value
            const previousTodos = queryClient.getQueryData('admin-order-exist')

            // update 
            queryClient.setQueryData('admin-order-exist', old => {
                let index = old.findIndex(
                    (e) => e._id === data.order._id
                );
                old[index] = {
                    ...old[index],
                    ...data.values
                };
                return [...old]
            })

            // Return a context object with the snapshotted value
            return { previousTodos }
        },
        // If the mutation fails, use the context returned from onMutate to roll back
        onError: (err, record, context) => {
            queryClient.setQueryData('admin-order-exist', context.previousTodos)
        },
        // Always refetch after error or success:
        onSettled: () => {
            queryClient.invalidateQueries('admin-order-exist')
        },
    })
};

export const useDeleteAdminOrder = () => {
    const queryClient = useQueryClient();
    return useMutation((record) => orderApi.delete(record._id), {
        onMutate: async record => {
            // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
            await queryClient.cancelQueries('admin-order-exist')
            // Snapshot the previous value
            const previousTodos = queryClient.getQueryData('admin-order-exist')
            //update 
            queryClient.setQueryData('admin-order-exist', old => {
                const _old = [...old]
                return _old.filter(item => item.key != record.key)
            })
            // Return a context object with the snapshotted value
            return { previousTodos }
        },
        // If the mutation fails, use the context returned from onMutate to roll back
        onError: (err, record, context) => {
            queryClient.setQueryData('admin-order-exist', context.previousTodos)
        },
        // Always refetch after error or success:
        onSettled: () => {
            queryClient.invalidateQueries('admin-order-exist')
            queryClient.invalidateQueries('admin-order-deleted')

        },
    })

};
export const useRestoreAdminOrder = () => {
    const queryClient = useQueryClient();
    return useMutation((record) => orderApi.restore(record._id), {
        onMutate: async record => {
            // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
            await queryClient.cancelQueries('admin-order-deleted')
            // Snapshot the previous value
            const previousTodos = queryClient.getQueryData('admin-order-deleted')
            //update 
            queryClient.setQueryData('admin-order-deleted', old => {
                const _old = [...old]
                return _old.filter(item => item.key != record.key)
            })
            // Return a context object with the snapshotted value
            return { previousTodos }
        },
        // If the mutation fails, use the context returned from onMutate to roll back
        onError: (err, record, context) => {
            queryClient.setQueryData('admin-order-deleted', context.previousTodos)
        },
        // Always refetch after error or success:
        onSettled: () => {
            queryClient.invalidateQueries('admin-order-exist')
            queryClient.invalidateQueries('admin-order-deleted')
        },
    })

};