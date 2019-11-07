import React from "react";
import Provider from "react-redux/es/components/Provider";
import store from "./store";
import LayoutRenderer from "./layouts/LayoutRenderer";

function App() {
    return (
        <Provider store={store}>
            <LayoutRenderer />
        </Provider>
    );
}

export default App;
