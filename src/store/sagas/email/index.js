import { all } from "redux-saga/effects";
import { sendVerificationWatcher } from "./verification.saga";

export default function* emailSaga() {
    yield all([sendVerificationWatcher()]);
}
