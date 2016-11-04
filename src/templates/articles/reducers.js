//article reducer
import objectAssign from 'object-assign';
import * as types from '../../actions/actions';
import initState from './initState';

export default function articleReducer(state = initState, action){
  let newState = objectAssign({}, state);
  switch(action.type){
    case types.LOAD_COMPONENTS:
      newState.header = action.header;
      return newState;
    default:
      return state;
  }
}