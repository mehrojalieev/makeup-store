const load_carts = (getCart) => {
    console.log(getCart);
    return{
        type: "ADD_TO_CART",
        payload: {
            getCart
        }
    }
}



const loadCarts = (getCart) => async dispatch => {
    console.log(getCart);
    dispatch(load_carts(getCart))
}


export {loadCarts}