const load_cuureny = (getCurrency) => {
    return {
        type: "ADD_CURRENCY",
        payload: {
            getCurrency
        }
    }
}



const loadCurrency  = (currency) => async dispatch => {
    console.log(currency);
    dispatch(load_cuureny(currency))
}

export {loadCurrency}