import { all } from "redux-saga/effects";
import { registerUserWatcher } from "./registration.saga";

export default function* userSaga() {
    yield all([registerUserWatcher()]);
}
