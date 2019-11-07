import React, { Component } from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import { connect } from "react-redux";

class AuthDialog extends Component {
    state = {
        open: false,
    };

    render() {
        return (
            <div>
                <Dialog open={this.props.open}>
                    <DialogContent>Test Dialog</DialogContent>
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
    {}
)(AuthDialog);
