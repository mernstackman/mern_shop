import React, { Component } from "react";
import { Dialog, DialogContent, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import RegistrationForm from "./Forms/RegistrationForm";
import { LineWings } from "../../../components/LineWings";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { hidePopup } from "../../../store/actions/popups/auth_display.actions";
import Container from "../../../components/Container";

const PaperComponent = props => <Paper {...props} style={{ width: "auto", maxWidth: "450px", height: "auto" }} />;

const styles = theme => ({
    avatar: {
        backgroundColor: "#bd0606",
    },
});

class AuthDialog extends Component {
    state = {
        open: false,
    };

    handleClose = () => {
        this.props.hidePopup();
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.handleClose}
                    PaperComponent={PaperComponent}
                    aria-labelledby="auth-dialog-title"
                >
                    <DialogContent>
                        <Container stackCenter>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign up
                            </Typography>
                        </Container>

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

export default withStyles(styles)(connect(mapStateToProps, { hidePopup })(AuthDialog));
