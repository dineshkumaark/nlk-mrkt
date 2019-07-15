import { combineReducers } from 'redux';
import current from './current';
import products from './products';
import cart from './cart';
const rootReducers = combineReducers({
    current,
    products,
    cart
});

export default rootReducers;