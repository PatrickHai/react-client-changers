//常权益 reducer
import objectAssign from 'object-assign';
import * as types from './actions';
import initState from './initState';

export default function rightsReducer(state = initState, action){
  let newState = objectAssign({}, state);
  switch(action.type){
    case types.LOAD_COMPONENTS:
      newState.data = action.data;
      return newState;
    default:
      return state;
  }

}