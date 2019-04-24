
export default (state = [], action) => {
    switch(action.type){
        case 'SEARCH_RESULT':
        console.log(action.payload);
            return [action.payload];
        default:
            return state;
    };
}
