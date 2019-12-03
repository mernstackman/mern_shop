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
        // error is server error
        // errors is formik error
        const { error, errors, status, values, setStatus, data } = this.props;

        // if server send error and
        // current status error is null
        // and afterSubmit flag is true
        if (error && !status.error && status.afterSubmit) {
            // set server error to status error value
            // set status after submit to false
            setStatus({ error, afterSubmit: false });
        }

        // If server send error and
        // current status error is not null and
        // values is changed
        if (error && status.error && prevProps.values !== values && !status.afterSubmit) {
            // set error status to null
            setStatus({ error: null });
        }

        // if server send error and
        // current status error is not null and
        // and the error from server is different than the error status
        // and after form submission
        if (error && status.error && error !== status.error && status.afterSubmit) {
            // renew error status
            setStatus({ error });
        }

        // If server send error
        // and server error contain error property
        // and previous formik errors is equal to current formik error
        // and after user submit the form
        if (error && error.errors && prevProps.errors === errors && status.afterSubmit) {
            this.props.setFieldError(error.errors[0].path, error.errors[0].message);
        }

        if (!isEmpty(data) && data.success) {
            console.log(data.message);
        }
    }

    disableButton = () => {
        const {
            isLoading,
            errors,
            isSubmitting,
            dirty,
            status,
            data: { success },
        } = this.props;
        return success || isSubmitting || !isEmpty(errors) || Boolean(status.error) || !dirty || isLoading;
    };

    render() {
        const { isLoading, handleSubmit, status, classes } = this.props;

        return (
            <Form id="registrationForm" onSubmit={handleSubmit}>
                {status.error && (
                    <div className={classes.errorMessage}>
                        Oopss..! Something is happening with the server. Please try again later.
                    </div>
                )}
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
                    disabled={this.disableButton()}
                >
                    {isLoading ? <ButtonLoader></ButtonLoader> : "Register"}
                </Button>
            </Form>
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

const handleSubmit = async (values, { setSubmitting, setStatus, props }) => {
    const userData = trimVal(values);
    props.registerUser(userData);
    setSubmitting(false);
    setStatus({ afterSubmit: true });
};

const mapPropsToStatus = props => {
    return { error: null };
};
// Tie the options
const options = {
    handleSubmit,
    mapPropsToValues,
    validationSchema,
    enableReinitialize: true,
    mapPropsToStatus,
};

const RegistrationForm = withFormik(options)(RegisterForm);

/* REDUX */
const mapStateToProps = ({ user }) => ({
    data: user.register.data,
    isLoading: user.register.isLoading,
    error: user.register.error,
});

export default withStyles(styles)(connect(mapStateToProps, { registerUser })(RegistrationForm));
