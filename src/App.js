import React from "react";
import "typeface-roboto";
import Provider from "react-redux/es/components/Provider";
import store from "./store";
import LayoutRenderer from "./layouts/LayoutRenderer";
import { StylesProvider } from "@material-ui/core/styles";
import { MuiTheme } from "./components/MuiTheme";

function App() {
    return (
        <Provider store={store}>
            <StylesProvider injectFirst>
                <MuiTheme>
                    <LayoutRenderer />
                </MuiTheme>
            </StylesProvider>
        </Provider>
    );
}

export default App;
