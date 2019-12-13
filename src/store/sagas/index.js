import { all } from "redux-saga/effects";
import userSaga from "./user";
import emailSaga from "./email";

export default function* rootSaga() {
    yield all([userSaga(), emailSaga()]);
}
