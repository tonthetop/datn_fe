import * as types from "../constants/actionTypes";

export const saveUser = (user) => {
    return {
        type: types.SAVE_USER,
        payload: user,
    };
};
export const deleteUser = (user) => {
    return {
        type: types.DELETE_USER,
        payload: user,
    };
};