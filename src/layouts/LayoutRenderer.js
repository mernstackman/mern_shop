import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Layouts from "./Layouts";

const styles = theme => ({});

class LayoutRenderer extends Component {
  render() {
    const Layout = Layouts["main"];
    return <Layout />;
  }
}

export default withStyles(styles, { withTheme: true })(LayoutRenderer);
