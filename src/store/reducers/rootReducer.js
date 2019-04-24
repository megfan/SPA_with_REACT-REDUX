
export default (state = [], action) => {
    switch(action.type){
        case 'SEARCH_RESULT':
        console.log(action.payload);
            return [...state, action.payload];
        default:
            return state;
    };
}
