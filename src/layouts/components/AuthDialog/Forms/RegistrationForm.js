import React, { Component } from "react";
import { InputAdornment, withStyles } from "@material-ui/core";
import Button from "../../../../components/Button/StyledButton";
import EmailIcon from "@material-ui/icons/Email";
import PasswordIcon from "@material-ui/icons/VpnKey";
import NameIcon from "@material-ui/icons/Person";
import TextFieldFormik from "../../../../components/Formik/TextField/TextFieldFormik";
import { Form, withFormik } from "formik";
import * as yup from "yup";
import styles from "./styles";
import { emailRegex, userRegex, passRegex } from "../../../../regex";

class RegisterForm extends Component {
    enableButton = () => {};
    disableButton = () => {};

    render() {
        return (
            <div className="w-full flex flex-row justify-center">
                <Form id="registrationForm" onSubmit={this.props.handleSubmit}>
                    <TextFieldFormik
                        name="username"
                        type="text"
                        label="Username"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <NameIcon className="text-20" color="action" />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        required
                        fullWidth
                    />

                    <TextFieldFormik
                        name="email"
                        type="text"
                        label="Email"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <EmailIcon className="text-20" color="action" />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        required
                        fullWidth
                    />

                    <TextFieldFormik
                        name="password"
                        type="password"
                        label="Password"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <PasswordIcon className="text-20" color="action" />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        required
                        fullWidth
                    />

                    <TextFieldFormik
                        name="password_confirm"
                        type="password"
                        label="Confirm Password"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <PasswordIcon className="text-20" color="action" />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        required
                        fullWidth
                    />

                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="primary"
                        value="legacy"
                        aria-label="register"
                    >
                        Register
                    </Button>
                </Form>
            </div>
        );
    }
}

/* OPTIONS */

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .matches(userRegex, "Username cannot contain restricted special character")
        .trim()
        .required(),
    email: yup
        .string()
        .matches(emailRegex, "Please enter valid email address")
        .trim()
        .required(),
    password: yup
        .string()
        .matches(
            passRegex,
            "Should at least 6 characters long, contains a special character, number, uppercase and lowercase letter"
        )
        .required(),
    password_confirm: yup
        .string()
        .oneOf([yup.ref("password"), null], "Password not match")
        .required(),
});

/*
 * Need to be declared even the initial value is not required, to prevent react's
 * uncontrolled to controlled form switch warning. *
 * The warning will still appear if the value passed is null
 */
const mapPropsToValues = props => ({
    username: "",
    email: "",
    password: "",
    password_confirm: "",
});

const trimVal = obj => {
    if (typeof obj !== "object") {
        return;
    }

    let value;
    let output = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            value = obj[key].trim();
            output[key] = value;
        }
    }
    return output;
};

const handleSubmit = (values, { setSubmitting }) => {
    const userData = trimVal(values);
    setTimeout(() => {
        alert(JSON.stringify(userData, null, 2));
        setSubmitting(false);
    }, 1000);
};

// Tie the options
const options = {
    handleSubmit,
    mapPropsToValues,
    validationSchema,
};

const RegistrationForm = withFormik(options)(RegisterForm);

export default withStyles(styles)(RegistrationForm);
