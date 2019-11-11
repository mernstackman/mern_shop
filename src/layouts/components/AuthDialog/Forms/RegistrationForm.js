import React, { Component } from "react";
import { Button, InputAdornment, withStyles } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import PasswordIcon from "@material-ui/icons/VpnKey";
import NameIcon from "@material-ui/icons/Person";
import TextFieldFormik from "../../../../components/Formik/TextField/TextFieldFormik";
import { Form, withFormik } from "formik";
import * as yup from "yup";
import styles from "./styles";

class RegisterForm extends Component {
    // Get reference to the DOM
    // form = React.createRef();
    onSubmit = () => {
        // console.log(this.form.getModel().name);
    };

    enableButton = () => {};
    disableButton = () => {};

    /*     changeValue = () => {
        alert("value change triggered!");
    }; */

    render() {
        return (
            <div className="w-full flex flex-row justify-center">
                <Form id="registrationForm" autoComplete="off">
                    <TextFieldFormik
                        name="username"
                        type="text"
                        label="Username"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <EmailIcon className="text-20" color="action" />
                                </InputAdornment>
                            ),
                        }}
                        required
                        helperText="required"
                    />
                    {/*
                    <TexfieldFormik name="email" type="text" label="Email"></TexfieldFormik>
                    <TexfieldFormik name="password" type="text" label="Password"></TexfieldFormik>
                    <TexfieldFormik name="password_confirm" type="text" label="Confirm password"></TexfieldFormik> 
                    <Button>Register</Button>                    
                    */}
                </Form>
            </div>
        );
    }
}

const initialValues = { username: "OK" };

const RegisterValidation = yup.object().shape({
    username: yup.string().required(),
});

/*
 * Need to be declared even the initial value is not required, to prevent react's
 * uncontrolled to controlled form switch warning. *
 * The warning will still appear if the value passed is null
 */
const mapPropsToValues = props => ({
    username: "",
});

const options = { mapPropsToValues, validationSchema: RegisterValidation };

const RegistrationForm = withFormik(options)(RegisterForm);

export default withStyles(styles)(RegistrationForm);
