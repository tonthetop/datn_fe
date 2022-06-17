import moment from "moment";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { productApi } from '../api/productApi';

export const useAdminProductExist = () => {
    return useQuery("admin-product-exist", () => productApi.getAll(), {
        select: (data) => {
            let _data = data.map((e, index) => {
                return {
                    key: index,
                    ...e,
                    image: (<img style={{ height: "50px", width: "70px", objectFit: "cover" }} src={e.imgList[1]}></img>),
                    discount: e.discountIds.length > 0 ? e.discountIds[0].value : 0,
                    currentSize: e.productBySize[0].size,
                    currentAmount: e.productBySize[0].amount,
                    currentDiscount: e.discountIds.length > 0 ?`${e.discountIds[0].code}--${e.discountIds[0].value}%--${moment(e.discountIds[0].timeBegin).format('YYYY/MM/DD')}-${moment(e.discountIds[0].timeEnd).format('YYYY/MM/DD')}`: "Chưa có giảm giá"
                }
            })
            return _data;
        },
    });
};
export const useAdminProductDeteted = () => {
    return useQuery("admin-product-deleted", () => productApi.getProductsDeleted(), {
        select: (data) => {
            let _data = data.map((e, index) => {
                return {
                    key: index,
                    ...e,
                    image: (<img style={{ height: "50px", width: "70px", objectFit: "cover" }} src={e.imgList[1]}></img>),
                    discount: e.discountIds.length > 0 ? e.discountIds[0].value : 0,
                }
            })
            return _data;
        }
    });
};



export const useUpdateAdminProduct = () => {
    const queryClient = useQueryClient();
    return useMutation(data => productApi.update(data.product._id, data.values), {
        onMutate: async (data) => {
            // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
            await queryClient.cancelQueries('admin-product-exist')
            // Snapshot the previous value
            const previousTodos = queryClient.getQueryData('admin-product-exist')

            // update UI
            // queryClient.setQueryData('admin-product-exist', old => {
            //     let index = old.findIndex(
            //         (e) => e._id === data.product._id
            //     );
            //     old[index] = {
            //         ...old[index],
            //         ...data.values,
            //     };
            //     return [...old]
            // })

            // Return a context object with the snapshotted value
            return { previousTodos }
        },
        // If the mutation fails, use the context returned from onMutate to roll back
        onError: (err, data, context) => {
            queryClient.setQueryData('admin-product-exist', context.previousTodos)
        },
        // Always refetch after error or success:
        onSettled: () => {
            queryClient.invalidateQueries('admin-product-exist')
        },
    })
};

export const useDeleteAdminProduct = () => {
    const queryClient = useQueryClient();
    return useMutation((record) => productApi.delete(record._id), {
        onMutate: async record => {
            // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
            await queryClient.cancelQueries('admin-product-exist')
            // Snapshot the previous value
            const previousTodos = queryClient.getQueryData('admin-product-exist')
            //update 
            queryClient.setQueryData('admin-product-exist', old => {
                const _old = [...old]
                return _old.filter(item => item.key != record.key)
            })
            // Return a context object with the snapshotted value
            return { previousTodos }
        },
        // If the mutation fails, use the context returned from onMutate to roll back
        onError: (err, record, context) => {
            queryClient.setQueryData('admin-product-exist', context.previousTodos)
        },
        // Always refetch after error or success:
        onSettled: () => {
            queryClient.invalidateQueries('admin-product-exist')
            queryClient.invalidateQueries('admin-product-deleted')

        },
    })

};

export const useDeleteForceAdminProduct = () => {
    const queryClient = useQueryClient();
    return useMutation((record) => productApi.deleteForce(record._id), {
        onMutate: async record => {
            // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
            await queryClient.cancelQueries('admin-product-deleted')
            // Snapshot the previous value
            const previousTodos = queryClient.getQueryData('admin-product-deleted')
            //update 
            queryClient.setQueryData('admin-product-deleted', old => {
                const _old = [...old]
                return _old.filter(item => item.key != record.key)
            })
            // Return a context object with the snapshotted value
            return { previousTodos }
        },
        // If the mutation fails, use the context returned from onMutate to roll back
        onError: (err, record, context) => {
            queryClient.setQueryData('admin-product-deleted', context.previousTodos)
        },
        // Always refetch after error or success:
        onSettled: () => {
            queryClient.invalidateQueries('admin-product-deleted')
        },
    })

};
export const useRestoreAdminProduct = () => {
    const queryClient = useQueryClient();
    return useMutation((record) => productApi.restore(record._id), {
        onMutate: async record => {
            // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
            await queryClient.cancelQueries('admin-product-deleted')
            // Snapshot the previous value
            const previousTodos = queryClient.getQueryData('admin-product-deleted')
            //update 
            queryClient.setQueryData('admin-product-deleted', old => {
                const _old = [...old]
                return _old.filter(item => item.key != record.key)
            })
            // Return a context object with the snapshotted value
            return { previousTodos }
        },
        // If the mutation fails, use the context returned from onMutate to roll back
        onError: (err, record, context) => {
            queryClient.setQueryData('admin-product-deleted', context.previousTodos)
        },
        // Always refetch after error or success:
        onSettled: () => {
            queryClient.invalidateQueries('admin-product-exist')
            queryClient.invalidateQueries('admin-product-deleted')
        },
    })

};