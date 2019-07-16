import data from '../components/data/data.json';
let initialState = {allProducts: data,currentProduct:[]};
export default function product(state = initialState,action){
    switch(action.payload){
        case "CHANGE_CURRENT":
        return state;
        case "ADD_COUNT":
            console.log(action.payload);
            return {
                ...state,

            };
        case "SUB_COUNT":
                return {
                 ...state,
                 carts: [...state.carts,action.payload]
                };
        default:
        return state;
    }
}