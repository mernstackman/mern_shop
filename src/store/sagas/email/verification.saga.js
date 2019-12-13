import { put, call, takeLatest } from "redux-saga/effects";
import SendEmail from "../../../apis/email";
import {
    SEND_VERIFICATION,
    SEND_VERIFICATION_SUCCESS,
    SEND_VERIFICATION_ERROR,
} from "../../actions/email/verification.action";

function* sendEmailVerification(action) {
    try {
        const data = yield call(SendEmail.verification, action.payload);

        // Throw error received from server
        if (data.hasOwnProperty("errors")) {
            throw data;
        }

        yield put({ type: SEND_VERIFICATION_SUCCESS, payload: data });
    } catch (error) {
        let errorMessage = null;

        if (error.message !== "empty") {
            errorMessage = error;
        }

        yield put({ type: SEND_VERIFICATION_ERROR, payload: errorMessage });
    }
}

export function* sendVerificationWatcher() {
    yield takeLatest(SEND_VERIFICATION, sendEmailVerification);
}
