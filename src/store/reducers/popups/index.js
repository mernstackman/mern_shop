import { combineReducers } from "redux";
import authDisplayReducer from "./auth_display.reducer";

const popups = combineReducers({
    authDisplayReducer,
});

export default popups;
