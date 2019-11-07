import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Header from "../components/Header";
import AuthDialog from "../components/AuthDialog";

const styles = theme => ({});

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <AuthDialog />
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Layout);
