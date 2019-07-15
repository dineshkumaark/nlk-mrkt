let initialState = {};

export default function cart(state = initialState,action){
    switch(action.payload){
        case 'ADD_TO_CART':
        console.log(action.payload);
        return{
            ...state,
            state: action.payload
        }
        default:
        return state;
    }
}
