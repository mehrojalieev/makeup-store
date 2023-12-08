import { LOAD__PRODUCTS } from "../actions/actions"

const initialState = {
    products_data: [],
    isLoading: true
}


const productReducer = (state = initialState, {type, payload}) => {
    console.log(state);
    switch(type){
        case LOAD__PRODUCTS: 
            return{
                products_data: payload.products,
                isLoading: false
            } 
            default: return state
           
    }
}

export default productReducer