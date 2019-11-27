import { combineReducers } from "redux";
import popups from "./popups";
import user from "./user";

const createReducer = asyncReducers =>
    combineReducers({
        popups,
        user,
        ...asyncReducers,
    });
export default createReducer;
