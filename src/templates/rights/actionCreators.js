import * as types from './actions';
import fetch from 'isomorphic-fetch';
import HOST from '../../config.js';

export function loadComponents(id){
  id =  id ? id : 5;
  return dispatch => {
    fetchRight(id).then(res => {
      if(res.code === 0){
        let action = {type: types.LOAD_COMPONENTS, data: res.data};
        dispatch(action);
      }else{
        // console.log('Ajax call failed!');
      }
    }).catch(err => {
      if(err){
        // console.log('Ajax call failed!');
        throw err;
      }
    });
  };
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

