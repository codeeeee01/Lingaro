import {combineReducers} from 'redux';
import homepage from './homepage/homepageReducer';

const allReducer = combineReducers({
  homepage,
});

export default allReducer;
