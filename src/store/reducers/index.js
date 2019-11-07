import { combineReducers } from "redux";
import popups from "./popups";

const createReducer = asyncReducers =>
    combineReducers({
        popups,
        ...asyncReducers,
    });
export default createReducer;
