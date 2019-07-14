import { combineReducers } from 'redux';
import current from './current';
import products from './products';
const rootReducers = combineReducers({
    current,
    products
});

export default rootReducers;