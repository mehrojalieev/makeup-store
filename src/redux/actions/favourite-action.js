const load_favourite = (favourite_product) => {
    console.log(favourite_product);
    return{
        type: "FAVOURITE",
        payload: {
            favourite_product
        }
    }
}


const loadFavouriteProduct = (likedPRod) => async dispatch => {
    dispatch(load_favourite(likedPRod))
}   


export {loadFavouriteProduct}