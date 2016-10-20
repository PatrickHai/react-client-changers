import { combineReducers } from 'redux';
import rights from '../templates/rights/reducers';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  rights,
  routing: routerReducer
});

export default rootReducer;
