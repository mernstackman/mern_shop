import { container } from "../../../../styles/variables";

const styles = theme => {
    return {
        topBar: {
            position: "fixed",
            zIndex: "1100",
            height: "30px",
            backgroundColor: "#ffffff",
        },
        toolBar: {
            display: "flex",
            ...container,
            minHeight: "30px",
            flex: "1",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "no-wrap",
        },
        authText: {
            fontWeight: "600",
            fontFamily: "Lato",
            fontSize: "14px",
            color: theme.palette.dark,
            "& span": {
                color: "#2e2e2e",
                fontWeight: "600",
                fontFamily: "Lato",
            },
            "& a": {
                margin: "0 3px",
            },
        },
        authLink: {
            cursor: "pointer",
            color: theme.palette.primary.main,
            "& hover": {
                textDecoration: "none",
            },
        },
    };
};

export default styles;
