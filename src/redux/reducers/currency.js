const initialState = {
    currency_data: ''
}

const currencyReducer = (state = initialState, {type, payload}) => {
        switch(type){
            case 'ADD_CURRENCY':
                return{
                    currency_data: payload.getCurrency
                } 
            default: return state
        }
}


export {currencyReducer}