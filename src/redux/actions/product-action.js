import { instance } from "../../api"
import { LOAD__PRODUCTS } from "./actions"

const load__products = (products) => {
    return {
        type: LOAD__PRODUCTS,
        payload: {
             products
             }
    }
}


const loadProducts = () => async dispatch => {
    instance.get("/products.json")
        .then(response => {
            dispatch(load__products(response.data))
        })
}

export { loadProducts }