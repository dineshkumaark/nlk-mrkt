let initialState = 0;
export default function counter(state = initialState,action) {
    switch(action.type){
        case "ADD":
            return state + action.payload;
        case "SUB":
            return state - 1;
        default:
            return state;
    }
}