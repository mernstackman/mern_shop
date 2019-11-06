import { container } from "../../../../styles/variables";

const styles = theme => ({
  topBar: {
    position: "fixed",
    zIndex: "1100",
    height: "48px",
    backgroundColor: "#ffffff"
  },
  toolBar: {
    display: "flex",
    ...container,
    minHeight: "50px",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "no-wrap"
  },
  authText: {
    fontWeight: "700",
    fontFamily: "Montserrat",
    fontSize: "16px",
    // color: theme.pallete.dark,
    "& span": {
      color: "#2e2e2e",
      fontWeight: "700",
      fontFamily: "Montserrat"
    },
    "& a": {
      margin: "0 3px"
    }
  },
  authLink: {
    cursor: "pointer",
    // color: theme.pallete.primary.main,
    "& hover": {
      textDecoration: "none"
    }
  }
});

export default styles;
