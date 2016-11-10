import * as types from './actions';
import fetch from 'isomorphic-fetch';
import HOST from '../../config';
import auth from '../../auth'

export function loadComponents(id){
  return dispatch => {
    fetchRight(id).then(res => {
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
    fetchFeeds().then(res => {
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

function fetchRight(id){
  let url = `${HOST}/api/rights/${id}`;
  return fetch(url,{
            method:'GET',
            mode:'cors',
            headers:{
              'Content-Type':'application/json;charset:utf-8'
            }
         })
         .then(res=>{
           return res.json();
         });
}

function fetchUser(token){
  let url = `${HOST}/api/user`;
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers:{
      'Content-Type':'application/json;charset:utf-8',
      'Authorization': token
    }
  }).then(res=>{
    return res.json();
  })
}

function fetchFeeds(){
  let url = `${HOST}/api/feeds`;
  let headers = auth.getHeaders();
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      ...headers,
      'Content-Type':'application/json;charset:utf-8'
    }
  }).then(res=>{
    return res.json();
  })
}

