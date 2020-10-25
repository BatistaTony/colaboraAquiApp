import { createStore, applyMiddleware } from "redux";
import AllReducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  AllReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
