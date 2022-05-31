import { combineReducers } from "redux";
import cartsReducer from "./carts";
import userReducer from "./user";
const rootReducer = combineReducers({
    carts: cartsReducer,
    user: userReducer,
});
export default rootReducer;