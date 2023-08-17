import { applyMiddleware, createStore } from "redux";
import { AllReducers } from "../Reducer/AllReducers";
import thunk from "redux-thunk"
export let Store = createStore(AllReducers,applyMiddleware(thunk));