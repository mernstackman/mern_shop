import React from "react";
import { ThemeProvider } from "@material-ui/core/";
import { createMuiTheme } from "@material-ui/core/styles";
// import { withRouter } from "react-router-dom";
import muiThemeConfig from "./muiThemeConfig";

const muitheme = createMuiTheme(muiThemeConfig.default);

const MuiTheme = ({ children }) => {
    return <ThemeProvider theme={muitheme}>{children}</ThemeProvider>;
};

export default MuiTheme;
