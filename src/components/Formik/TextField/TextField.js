import React, { Component } from "react";
import PropTypes from "prop-types";
import { getIn } from "formik";
import MTextField from "@material-ui/core/TextField";
import { fieldShape, formShape } from "./ms_proptypes";

class TextField extends Component {
    handleChange = e => {
        this.props.field.onChange(e);
        if (this.props.onChange) {
            this.props.onChange(e);
        }
    };

    handleBlur = e => {
        this.props.field.onBlur(e);
        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
    };

    render() {
        const {
            field,
            form: { touched, errors },
            helperText,
            children,
            ...props
        } = this.props;
        const message = getIn(touched, field.name) && getIn(errors, field.name);

        return (
            <MTextField
                {...props}
                {...field}
                error={Boolean(message)}
                helperText={message || helperText}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
            >
                {children}
            </MTextField>
        );
    }
}

if (process.env.NODE_ENV !== "production") {
    TextField.propTypes = {
        field: fieldShape.isRequired,
        form: formShape.isRequired,
        helperText: PropTypes.node,
        children: PropTypes.node,
        onChange: PropTypes.func,
        onBlur: PropTypes.func,
    };
}

export default TextField;
