import { createStore } from "redux";
import AllReducers from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConf = {
  key: "colaboraAqui",
  storage,
};

const persistedReducer = persistReducer(persistConf, AllReducers);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };
