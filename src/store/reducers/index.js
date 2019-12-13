import { combineReducers } from "redux";
import popups from "./popups";
import user from "./user";
import email from "./email";

const createReducer = asyncReducers =>
    combineReducers({
        popups,
        user,
        email,
        ...asyncReducers,
    });
export default createReducer;
