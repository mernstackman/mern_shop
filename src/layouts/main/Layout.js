import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Header from "../components/Header";

const styles = theme => ({});

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Layout);
