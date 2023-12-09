import { combineReducers } from "redux";
import productReducer from "./product-reducer";
import { loadCartsReducer } from "./cart-reducer";

const rootReducer = combineReducers({
    products: productReducer,
    carts: loadCartsReducer
})


export {rootReducer}