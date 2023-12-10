import { combineReducers } from "redux";
import productReducer from "./product-reducer";
import { loadCartsReducer } from "./cart-reducer";
import { favouriteReducer } from "./favourite-reducer";
import { currencyReducer } from "./currency";

const rootReducer = combineReducers({
    products: productReducer,
    carts: loadCartsReducer,
    favourites: favouriteReducer,
    currency: currencyReducer
})


export {rootReducer}