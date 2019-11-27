import { combineReducers } from "redux";
import register from "./registration.reducer";

const user = combineReducers({
    register,
});

export default user;
