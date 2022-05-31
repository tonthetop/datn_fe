import * as types from "../constants/actionTypes";

export const saveCart = (cart) => {
    return {
        type: types.SAVE_CART,
        cart: cart,
    };
};