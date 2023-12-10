import { applyMiddleware, createStore,compose } from "redux";
import { thunk } from "redux-thunk";
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import { rootReducer } from "../reducers/combine";

const persistConfig = {
    key: 'reducer',
    storage: storage,
    whitelist: ["products", "carts", "favourites"]
};

const presistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(presistedReducer, composeEnhancer(applyMiddleware(thunk)));
persistStore(store);


export {store}