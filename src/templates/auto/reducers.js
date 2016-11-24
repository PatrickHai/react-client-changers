//动态渲染H5页 reducer
import objectAssign from 'object-assign';
import * as types from './actions';
import initState from './initState';

export default function autoReducer(state = initState, action){
  let newState = objectAssign({}, state);
  switch(action.type){
    case types.LOAD_COMPONENTS:
      newState = action.auto;
      return newState;
    default:
      return state;
  }
}