const initialState = {
    cart_data: []
}


const loadCartsReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TO_CART": 
        return{
            cart_data : state.cart_data && [...state.cart_data, action?.payload?.getCart] 
        }   
       
        default: return state
    }
}

export {loadCartsReducer}