import React, { Component } from "react";
import { InputAdornment, withStyles } from "@material-ui/core";
import styles from "./styles";
import Button from "../../../../components/Button/StyledButton";
import EmailIcon from "@material-ui/icons/Email";
import PasswordIcon from "@material-ui/icons/VpnKey";
import NameIcon from "@material-ui/icons/Person";
import TextFieldFormik from "../../../../components/Formik/TextField/TextFieldFormik";
import { Form, withFormik } from "formik";
import * as yup from "yup";
import { emailRegex, userRegex, passRegex } from "../../../../regex";
import { connect } from "react-redux";
import { registerUser } from "../../../../store/actions/user";
import isEmpty from "lodash/isEmpty";
import Wave from "../../../../components/Loaders/Wave";

const ButtonLoader = () => (
    <Wave size={25}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </Wave>
);

class RegisterForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.values !== this.props.values && this.props.error) {
            console.log(this.props.error);
            this.props.registerUser();
        }
    }

    render() {
        // console.log("From render method:", this.props);
        const { isLoading, error, errors, isSubmitting, dirty, handleSubmit } = this.props;
        return (
            <div className="w-full flex flex-row justify-center">
                <Form id="registrationForm" onSubmit={handleSubmit}>
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
                        style={{ height: "35px" }}
                        disabled={isSubmitting || !isEmpty(errors) || Boolean(error) || !dirty || isLoading}
                    >
                        {isLoading ? <ButtonLoader></ButtonLoader> : "Register"}
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

const handleSubmit = (values, { setSubmitting, props }) => {
    const userData = trimVal(values);
    props.registerUser(userData);
    setSubmitting(false);
};

// Tie the options
const options = {
    handleSubmit,
    mapPropsToValues,
    validationSchema,
    enableReinitialize: true,
};

const RegistrationForm = withFormik(options)(RegisterForm);

/* REDUX */
const mapStateToProps = ({ user }) => ({
    data: user.register.data,
    isLoading: user.register.isLoading,
    error: user.register.error,
});

export default withStyles(styles)(connect(mapStateToProps, { registerUser })(RegistrationForm));
