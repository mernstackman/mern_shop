import { put, call, takeLatest } from "redux-saga/effects";
import { register } from "../../../apis/user";
import { REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from "../../actions/user/register.action";

function* registerUserSaga(action) {
    try {
        const data = yield call(register, action.payload);
        yield put({ type: REGISTER_USER_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: REGISTER_USER_ERROR, payload: error });
    }
}

export function* registerUserWatcher() {
    yield takeLatest(REGISTER_USER, registerUserSaga);
}
