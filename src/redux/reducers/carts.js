import * as types from "../constants/actionTypes";
import { toast } from "react-toastify";
const data = JSON.parse(localStorage.getItem("carts"));
const initialState = data !== null ? data : [];

const cartsReducer = (state = initialState, action) => {
    let cart = action.payload ? action.payload : {};
    let index = state.findIndex(
        (e) => e._id === cart._id && e.size === cart.size
    );
    switch (action.type) {
        case types.SAVE_CART:
            if (index !== -1) {
                state[index] = {
                    ...state[index],
                    amount: state[index].amount + cart.amount,
                };
            } else {
                state.push(cart);
            }
            localStorage.setItem("carts", JSON.stringify(state));
            toast.success("Thêm thành công");
            return [...state];
        case types.DELETE_CART:
            state.splice(index, 1);
            localStorage.setItem("carts", JSON.stringify(state));
            toast.success("Xóa thành công");
            return [...state];
        case types.DELETE_ALLCART:
            localStorage.removeItem("carts");
            return [];
        case types.CHANGE_AMOUNT_CART:
            state[index] = {
                ...state[index],
                amount: cart.amount,
            };
            localStorage.setItem("carts", JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
};
export default cartsReducer;