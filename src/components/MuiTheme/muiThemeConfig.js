import { height } from "@material-ui/system";

const muiThemeConfig = {
    default: {
        palette: {
            primary: {
                main: "#00793d",
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
            fontFamily: ["Lato"].join(","),
            button: { textTransform: "none" },
        },
        overrides: {
            MuiFormHelperText: {
                contained: {
                    margin: "8px 2px 0",
                },
            },
            // MuiFormControl: { root: { marginTop: "10px" } },
            /*  MuiButton: {
                label: { height: "100%" },
            }, */
        },
    },
};

export default muiThemeConfig;
