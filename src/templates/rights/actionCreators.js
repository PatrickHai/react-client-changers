import * as types from './actions';
import auth from '../../auth';
import * as fetcher from '../../fetcher';

export function loadComponents(id){
  return dispatch => {
    fetcher.fetchRight(id).then(res => {
      if(res.code === 0){
        let action = {type: types.LOAD_COMPONENTS, data: res.data};
        dispatch(action);
      }else{
        console.log('Ajax call failed!');
      }
    }).catch(err => {
      if(err){
        throw err;
      }
    });
  };
}

export function loadFeeds(){
  return dispatch => {
    if(!auth.loggedIn()) {
      console.log('user is not logged in yet!');
      return;
    }
    fetcher.fetchFeeds().then(res => {
          if(res.code === 0){
            let action = {type: types.LOAD_FEEDS, feeds : res.feeds};
            dispatch(action);
          }else{
            console.log('Ajax call failed!');
          }
        }).catch(err => {
          throw err;
        });
  }
}

export function loadForm(){
  return dispatch => {
        fetcher.fetchForm().then(res => {
          if(res.code === 0){
            let action = {type: types.LOAD_FORM, form : res.data};
            dispatch(action);
          }else{
            console.log('Ajax call failed!');
          }
        }).catch(err => {
          throw err;
        });
  }
}

export function grabRight(id){
    return dispatch => {
        fetcher.grabRight(id).then(res => {
          if(res.result === 1){
            res.data.style = 'result_code show';
            let action = {type: types.GRAB_RIGHT_SUCCEED, grab: res.data}
            dispatch(action);
          }else{
            console.log('Ajax call failed!');
          }
        }).catch(err => {
          throw err;
        });
  }
}
