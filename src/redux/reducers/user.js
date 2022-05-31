import * as types from "../constants/actionTypes";
const data = JSON.parse(localStorage.getItem("user"));
const initialState = data !== null ? data : [11, 22, 33];

const userReducer = (state = initialState, action) => {
    let user = {};
    switch (action.type) {
        case types.SAVE_USER:
            user = {
                id: action.user._id,
            };
            state.push(user);
            localStorage.setItem("user", JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
};
export default userReducer;