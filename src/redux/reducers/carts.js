import * as types from "../constants/actionTypes";
const data = JSON.parse(localStorage.getItem("carts"));
const initialState = data !== null ? data : [];

const cartsReducer = (state = initialState, action) => {
    let cart = {};
    let index = null;
    switch (action.type) {
        case types.SAVE_CART:
            // index = state.findIndex(e => e._id === action.cart._id)
            // cart = action.cart;

            state.push(action.cart);
            localStorage.setItem("carts", JSON.stringify(state));
            console.log("state after added: ", state);
            return [...state];
        default:
            return state;
    }
};
export default cartsReducer;