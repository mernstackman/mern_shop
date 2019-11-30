import { serverBaseUrl } from "../config/core";

/* User registration */
export const register = data => {
    /*     return fetch(serverBaseUrl + "/user/register", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(json => json)
        .catch(error => error); */

    return new Promise((resolve, reject) => {
        fetch(serverBaseUrl + "/user/register", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                resolve(response.json());
            })
            .catch(error => reject(error));
    });
};
