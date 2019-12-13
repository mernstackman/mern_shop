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

const PaperComponent = props => (
    /* If the screen size is more than 1000px, then the component's width will be 35% of 1000px */
    <Paper {...props} style={{ width: "calc((1000px - 100%) * 1000)", maxWidth: "100%", minWidth: "35%", margin: 0 }} />
);

const styles = theme => ({
    avatar: {
        backgroundColor: "#bd0606",
    },
    messageText: {
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        "& .MuiTypography-root": {
            color: theme.palette.primary.main,
        },
    },
});

class AuthDialog extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    handleClose = () => {
        this.props.hidePopup();
    };

    render() {
        const { classes, open, registration } = this.props;
        console.log(registration);
        return (
            <div>
                <Dialog
                    open={open}
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
                                Register
                            </Typography>
                        </Container>

                        <div className="form-wrapper">
                            {!registration.success && <RegistrationForm />}
                            {registration.success && (
                                <div className={classes.messageText}>
                                    <Typography component="h4" variant="h6">
                                        Success
                                    </Typography>
                                    <span> {/* message from server */}</span>
                                </div>
                            )}
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = ({ user, popups }) => {
    // console.log(state);
    return {
        open: popups.authDisplayReducer.open,
        registration: user.register.data,
    };
};

export default withStyles(styles)(connect(mapStateToProps, { hidePopup })(AuthDialog));
