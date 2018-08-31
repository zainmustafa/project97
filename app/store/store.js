import { createStore, applyMiddleware, combineReducers } from "redux";
// import axios from "axios";
// import loggingMiddleware from "redux-logger"; // https://github.com/evgenyrodionov/redux-logger
// import thunkMiddleware from "redux-thunk"; // https://github.com/gaearon/redux-thunk

//importing sub-reducers from two sep files
import { campusReducer } from "./reducers";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
  campusReducer
});
const logger = createLogger();

const middleware = applyMiddleware(thunk, logger);

export const store = createStore(rootReducer, middleware);
//combining two sep reduxes into one?
//export combineReducers({campuses: campusRed, students: studentRed})
