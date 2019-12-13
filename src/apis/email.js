import { serverBaseUrl } from "../config/core";

class SendEmail {
    static verification(data) {
        return new Promise((resolve, reject) => {
            fetch(serverBaseUrl + "/auth/email/send/verification", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then(response => resolve(response))
                .catch(error => reject(error));
        });
    }
}
export default SendEmail;
