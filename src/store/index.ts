import { createStore, applyMiddleware } from "redux";
import AllReducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConf = {
  key: "colaboraAqui",
  storage,
};

const persistedReducer = persistReducer(persistConf, AllReducers);

let store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
let persistor = persistStore(store);

export { store, persistor };
