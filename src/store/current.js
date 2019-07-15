let initialState = {
    categories: ['Groceries','Steak,fish','Dairy','Food','Beverage','Cleaning'],
        imgs: ['c-groceries.png','c-turkey.png','c-apple.png','c-diet.png','c-salad.png','c-asparagus.png'],
        current:'Groceries',
        cart:[],
        count: 0
};
export default function current(state = initialState,action) {
    switch(action.type){
        case "CURRENT":
            return {
                ...state,
                current: action.payload
            };
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...new Set([...state.cart,action.payload])]
            };  
        case "ADD_COUNT":
            return {
                ...state,
                count: action.payload
            };  
        default:
            return state;
    }
}