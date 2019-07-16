import data from '../components/data/data.json';
let initialState = {allProducts: data,currentProduct:[]};
export default function product(state = initialState,action){
    switch(action.type){
        case "CHANGE_CURRENT":
        return state;
        case "ADD_COUNT":
        state.allProducts[action.payload.current][action.payload.index] = action.payload.newProducts
            return {
                ...state
                };
        case "SUB_COUNT":
        state.allProducts[action.payload.current][action.payload.index] = action.payload.newProducts
                return {
                 ...state
                };
        default:
        return state;
    }
}