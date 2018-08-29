import { createStore, applyMiddleware, combineReducers } from "redux";
import axios from "axios";
import rootReducer from "./reducers";
import loggingMiddleware from "redux-logger"; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from "redux-thunk"; // https://github.com/gaearon/redux-thunk

//importing sub-reducers from two sep files
import campusRed from "./campusesSubRed";
import studentRd from "./studentsSubRed";

export const SOME_ACTION1 = "SOME_ACTION1";
export const SOME_ACTION2 = "SOME_ACTION2";

const initialState = {
  campuses: {},
  students: {}
};

export default createStore(
  rootReducer,
  applyMiddleware(
    // `withExtraArgument` gives us access to axios in our async action creators!
    // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
    thunkMiddleware.withExtraArgument({ axios }),
    loggingMiddleware
  )
);
//combining two sep reduxes into one?
//export combineReducers({campuses: campusRed, students: studentRed})
