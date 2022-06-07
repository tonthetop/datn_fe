import * as types from "../constants/actionTypes";

export const saveCart = (cart) => {
    return {
        type: types.SAVE_CART,
        payload: cart,
    };
};
export const deleteCart = (cart) => {
    return {
        type: types.DELETE_CART,
        payload: cart,
    };
};
export const changeAmountCart = (cart) => {
    return {
        type: types.CHANGE_AMOUNT_CART,
        payload: cart,
    };
};
export const deleleAllCart = () => {
    return {
        type: types.DELETE_ALLCART,
    };
};