import { applyMiddleware, combineReducers, compose, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../saga";
import AuthReducer from "./reducer/AuthReducer";


const rootReducer = combineReducers({
    AuthReducer
})

const middlewareSaga = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [middlewareSaga]
});

middlewareSaga.run(rootSaga)

export default store;