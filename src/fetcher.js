import HOST from './config';
import auth from './auth';
import fetch from 'isomorphic-fetch';


export function fetchUser(){
  let url = `${HOST}/api/user`;
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      ...auth.getHeaders()
    }
  }).then(res=>{
      return res.json();
  });
}

export function fetchRight(id){
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

export function fetchFeeds(){
  let url = `${HOST}/api/feeds`;
  let headers = auth.getHeaders();
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      ...headers
    }
    })
     .then(res=>{
       return res.json();
     });
}

export function fetchForm(){
  let url = `${HOST}/api/form`;
  let headers = auth.getHeaders();
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      ...headers
    }
    })
     .then(res=>{
       return res.json();
     });
}

export function grabRight(id){
  let url = `${HOST}/api/right/${id}`;
  let headers = auth.getHeaders();
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      ...headers
    }
  }).then(res => {
    return res.json();
  })
}

