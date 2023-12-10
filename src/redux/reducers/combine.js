import { combineReducers } from "redux";
import productReducer from "./product-reducer";
import { loadCartsReducer } from "./cart-reducer";
import { favouriteReducer } from "./favourite-reducer";

const rootReducer = combineReducers({
    products: productReducer,
    carts: loadCartsReducer,
    favourites: favouriteReducer
})


export {rootReducer}