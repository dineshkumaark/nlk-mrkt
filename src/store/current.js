let initialState = {
    categories: ['Groceries','Steak,fish','Dairy','Food','Beverage','Cleaning'],
        imgs: ['c-groceries.png','c-turkey.png','c-apple.png','c-diet.png','c-salad.png','c-asparagus.png'],
        current:'Groceries'
};
export default function current(state = initialState,action) {
    switch(action.type){
        case "CURRENT":
            return {
                ...state,
                current: action.payload
            };
        default:
            return state;
    }
}