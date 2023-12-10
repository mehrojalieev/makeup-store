const remove_from_cart = (cart) => {
    console.log(cart);
    return{
        type: "REMOVE_CART",
        payload: {
            cart
        }
    }
}



const removeCartThunk = (cart) => async dispatch => {
    dispatch(remove_from_cart(cart))
}


export {removeCartThunk}