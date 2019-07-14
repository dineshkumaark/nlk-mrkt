import data from '../components/data/data.json';
let initialState = {allProducts: data,currentProduct:[]};
export default function product(state = initialState,action){
    switch(action.payload){
        case "CHANGE_CURRENT":
        return state;
        default:
        return state;
    }
}