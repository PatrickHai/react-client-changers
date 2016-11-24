import * as types from './actions';
import * as fetcher from '../../fetcher';

export function loadComponents(id){
  return dispatch => {
    fetcher.fetchAuto(id).then(res => {
      if(res.code === 0){
        let action = {type: types.LOAD_COMPONENTS, auto: res.data};
        dispatch(action);
      }else{
        // console.log('Ajax call failed!');
      }
    }).catch(err => {
      if(err){
        throw err;
      }
    });
  };
}
