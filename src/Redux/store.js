import React from "react";
import { createStore, applyMiddleware } from "redux";
import Reducer from "./reducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";


const sagaMiddleware = createSagaMiddleware();


const store = createStore(Reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default store;