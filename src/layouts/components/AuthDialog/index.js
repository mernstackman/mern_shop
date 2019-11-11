import React, { Component } from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import RegistrationForm from "./Forms/RegistrationForm";

import { connect } from "react-redux";
import { hidePopup } from "../../../store/actions/popups/auth_display.actions";

class AuthDialog extends Component {
    state = {
        open: false,
    };

    handleClose = () => {
        this.props.hidePopup();
    };

    render() {
        return (
            <div>
                <Dialog open={this.props.open} onClose={this.handleClose}>
                    <DialogContent>
                        <div className="w-full flex flex-grow flex-col">
                            <RegistrationForm></RegistrationForm>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = ({ popups }) => {
    return {
        open: popups.authDisplayReducer.open,
    };
};

export default connect(
    mapStateToProps,
    { hidePopup }
)(AuthDialog);
