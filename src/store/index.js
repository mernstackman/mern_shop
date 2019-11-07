import * as reduxModule from "redux";
import { compose, createStore } from "redux";
// import { applyMiddleWare, compose, createStore } from "redux";
// import { createSagaMiddleware } from "redux-saga";
// import rootSaga from "./sagas";
import createReducer from "./reducers";

reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = "@@redux/INIT";

const composeEnhancers =
    process.env.NODE_ENV !== "production" && typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers();
// const sagaMiddleware = createSagaMiddleware();
// const enhancer = composeEnhancers(applyMiddleWare(sagaMiddleware));

const store = createStore(createReducer(), enhancer);

store.asyncReducers = {};

export const injectReducer = (key, reducer) => {
    console.log(reducer, key);

    if (store.asyncReducers[key]) return;
    store.asyncReducers[key] = reducer;
    store.replaceReducer(createReducer(store.asyncReducers));
    return store;
};

// sagaMiddleware.run(rootSaga);

export default store;
