import { createStore, applyMiddleware } from "redux";
import AllReducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(AllReducers, composeWithDevTools(applyMiddleware()));

export default store;
