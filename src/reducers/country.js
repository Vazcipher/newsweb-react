const countryReducer=(state="in",action)=>{
    switch (action.type) {
        case 'CHANGE_COUNTRY':
            return state=action.payload
        default:
            return state;
    }
}

export default countryReducer
