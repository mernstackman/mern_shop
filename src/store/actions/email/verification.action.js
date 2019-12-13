export const SEND_VERIFICATION = "SEND_VERIFICATION";
export const SEND_VERIFICATION_SUCCESS = "SEND_VERIFICATION_SUCCESS";
export const SEND_VERIFICATION_ERROR = "SEND_VERIFICATION_ERROR";

export const sendVerificationEmail = data => ({ type: SEND_VERIFICATION, payload: data });
