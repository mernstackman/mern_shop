export const SHOW_AUTH = "SHOW_AUTH";

export function showAuth(options) {
    console.log(options);
    return {
        type: SHOW_AUTH,
        payload: options,
    };
}
