const load_favourite = (favourite_product) => {
    return{
        type: "FAVOURITE",
        payload: {
            favourite_product
        }
    }
}


const loadFavouriteProduct = (likedPRod) => (dispatch, getState) => {
    dispatch(load_favourite(likedPRod))
}   


export {loadFavouriteProduct}