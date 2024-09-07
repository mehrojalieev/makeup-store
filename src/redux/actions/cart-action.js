const load_carts = (getCart) => {
    console.log(getCart );
    return{
        type: "ADD_TO_CART",
        payload: {
            getCart
        }
    }
}

// const load_remove_cart = (removeCart) => {
//     console.log(removeCart);
//    return{
//     type: "REMOVE_CART",
//     payload: {
//         removeCart
//     }
//    }
// }



const loadCarts = (getCart) => async dispatch => {
    dispatch(load_carts(getCart))
}


// const removeCarts = (removeCart) => async dispatch => {
//    dispatch(load_remove_cart(removeCart));
// }


export {loadCarts}