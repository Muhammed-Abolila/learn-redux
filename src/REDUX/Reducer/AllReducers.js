import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { CounterReducer } from "./CounterReducer";
import { ApiReducer } from "./ApiReducer";
import { Api2Reducer } from "./Api2Reducer";
export let AllReducers=combineReducers({
    AuthReducer:AuthReducer,
    CounterReducer:CounterReducer,
    ApiReducer:ApiReducer,
    Api2Reducer:Api2Reducer
});