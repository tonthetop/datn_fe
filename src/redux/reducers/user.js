import { toast } from "react-toastify";
import * as types from "../constants/actionTypes";
const data = JSON.parse(localStorage.getItem("user"));
const initialState = data !== null ? data : {};

const userReducer = (state = initialState, action) => {
    let user = {};
    switch (action.type) {
        case types.SAVE_USER:
            user = {
                _id: action.payload.account._id,
                email: action.payload.account.email,
                name: action.payload.account.name,
                address: action.payload.account.address,
                phone: action.payload.account.phone,
                birth: action.payload.account.birth,
                role: action.payload.account.role,
                orders: action.payload.account.orderIds,
                tokenAccess: action.payload.token,
            };
            localStorage.setItem("user", JSON.stringify(user));
            toast.success("Đăng nhập thành công!");
            return {...user };
        case types.DELETE_USER:
            localStorage.removeItem("user");
            toast.success("Đã đăng xuất");
            return {}
        default:
            return state;
    }
};
export default userReducer;