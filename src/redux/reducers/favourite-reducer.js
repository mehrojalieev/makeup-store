const initialState ={
    favourite_data: []
}


const favouriteReducer = (state = initialState, {type, payload}) => {
    
    // const favourite_index = state.favourite_data.findIndex(liked => 
    //     liked.liked_id === payload.favourite_product.liked_id
        
    //     )
    switch(type){
        case "FAVOURITE":
            return{
                favourite_data: [...state.favourite_data, payload.favourite_product]
            }
            default: return state
    }
}

export {favouriteReducer}