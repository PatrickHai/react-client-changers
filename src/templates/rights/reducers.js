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
    case types.LOAD_FEEDS:
      newState.feeds = action.feeds;
      return newState;
    case types.LOAD_FORM:
      newState.form = action.form;
      return newState;
    case types.GRAB_RIGHT_SUCCEED:
      console.log(newState);
      newState.form.grab = action.grab;
      return newState;
    default:
      return state;
  }

}