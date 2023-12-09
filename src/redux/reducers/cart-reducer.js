const initialState = {
    cart_data: []
}


const loadCartsReducer = (state = initialState, {type, payload}) => {
    console.log(payload);
    switch(type){
        case "ADD_TO_CART": 
        return{

            cart_data : [...state.cart_data, payload?.getCart]
        }
        default: return state
    }
}

export {loadCartsReducer}