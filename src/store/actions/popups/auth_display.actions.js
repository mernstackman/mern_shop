export const SHOW_AUTH = "SHOW_AUTH";
export const HIDE_POPUP = "HIDE_POPUP";

export function showAuth(options) {
    console.log(options);
    return {
        type: SHOW_AUTH,
        payload: options,
    };
}

export function hidePopup() {
    return {
        type: HIDE_POPUP,
    };
}
