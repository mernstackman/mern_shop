const muiThemeConfig = {
    default: {
        palette: {
            primary: {
                main: "#f3b93f",
            },
            secondary: {
                main: "#333333",
            },
            text: {
                primary: "#000000",
                secondary: "#333333",
            },
            dark: "#333333",
        },
        typography: {
            fontFamily: ["Roboto"].join(","),
            button: { textTransform: "none" },
        },
        overrides: {
            MuiFormHelperText: {
                contained: {
                    margin: "8px 2px 0",
                },
            },
            // MuiFormControl: { root: { marginTop: "10px" } },
        },
    },
};

export default muiThemeConfig;
