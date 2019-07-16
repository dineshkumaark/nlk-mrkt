let initialState = {
    categories: ['Groceries','Steak,fish','Dairy','Food','Beverage','Cleaning'],
        imgs: ['c-groceries.png','c-turkey.png','c-apple.png','c-diet.png','c-salad.png','c-asparagus.png'],
        current:'Groceries',
        cart:[],
        carts:[],
        count: 1
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
            console.log(action.payload)
            return {
                ...state,
                carts: [...state.carts,action.payload]
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