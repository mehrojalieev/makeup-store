const initialState ={
    favourite_data: []
}


const favouriteReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case "FAVOURITE":
            return{
                favourite_data: [...state.favourite_data, payload.favourite_product]
            }
            default: return state
    }
}

export {favouriteReducer}