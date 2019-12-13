import { combineReducers } from "redux";
import verify from "./verification.reducer";

const email = combineReducers({
    verify,
});

export default email;
