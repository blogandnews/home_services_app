import { applyMiddleware, combineReducers, compose, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../saga";
import AuthReducer from "./reducer/AuthReducer";
import RegisterReducer from "./reducer/RegisterReducer";
import ErrorReducer from "./reducer/ErrorReducer";


const rootReducer = combineReducers({
    AuthReducer,
    RegisterReducer,
    ErrorReducer,
})

const middlewareSaga = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [middlewareSaga]
});

middlewareSaga.run(rootSaga)

export default store;