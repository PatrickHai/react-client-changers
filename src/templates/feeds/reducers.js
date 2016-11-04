//FEED reducer
import objectAssign from 'object-assign';
import * as types from './actions';
import initState from './initState';

export default function feedsReducer(state = initState, action){
  let newState = objectAssign({}, state);
  switch(action.type){
    case types.LOAD_COMPONENTS:
      newState.header = action.header;
      return newState;
    default:
      return state;
  }

}