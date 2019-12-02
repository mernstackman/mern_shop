export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export const registerUser = data => ({ type: REGISTER_USER, payload: data });
export const registerUserSuccess = data => ({ type: REGISTER_USER_SUCCESS, payload: data });
export const registerUserError = error => ({ type: REGISTER_USER_ERROR, payload: error });
