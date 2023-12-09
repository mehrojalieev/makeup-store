const load_carts = (getCart) => {
    return{
        type: "ADD_TO_CART",
        payload: {
            getCart
        }
    }
}



const loadCarts = (getCart) => async dispatch => {
    dispatch(load_carts(getCart))
}


export {loadCarts}