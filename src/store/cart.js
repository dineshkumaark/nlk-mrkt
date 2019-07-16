let initialState = {showModel: false};

export default function cart(state = initialState,action){
    console.log(action.type)
    switch(action.type){
        case 'SHOW_MODEL':
        return{
            ...state,
            showModel: !state.showModel
        }
        default:
        return state;
    }
}
