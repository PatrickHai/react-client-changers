import { combineReducers } from 'redux';
import rights from '../templates/rights/reducers';
import feeds from '../templates/feeds/reducers';
import {routerReducer} from 'react-router-redux';
import articles from '../templates/articles/reducers';

const rootReducer = combineReducers({
  rights,
  feeds,
  articles,
  routing: routerReducer
});

export default rootReducer;
