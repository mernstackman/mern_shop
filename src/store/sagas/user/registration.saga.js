import { put, call, takeLatest } from "redux-saga/effects";
import { register } from "../../../apis/user";
import { REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from "../../actions/user/register.action";

function* registerUserSaga(action) {
    try {
        if (!action.payload) {
            throw new Error("empty");
        }

        const data = yield call(register, action.payload);

        // Throw error received from server
        if (data.hasOwnProperty("errors")) {
            throw data;
        }

        yield put({ type: REGISTER_USER_SUCCESS, payload: data });
    } catch (error) {
        let errorMessage = null;

        if (error.message !== "empty") {
            errorMessage = error;
        }

        yield put({ type: REGISTER_USER_ERROR, payload: errorMessage });
    }
}

export function* registerUserWatcher() {
    yield takeLatest(REGISTER_USER, registerUserSaga);
}
