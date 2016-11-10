export default {
  getToken: function () {
    return sessionStorage.token;
  },
  setToken: function (token) {
    return sessionStorage.token = token;
  },
  getUser: function(){
    if(sessionStorage.user){
      return JSON.parse(sessionStorage.user);
    }else{
      return null;
    }
  },
  setUser:function(user){
    sessionStorage.user = JSON.stringify(user);
  },
  gotoLogin:function(nextState,replace){
    replace({
      pathname:'/auth/login'
    })
  },
  requireLogin:function(nextState){
    console.log('requireLogin');
  },
  logout: function (cb) {
    delete sessionStorage.token;
    delete sessionStorage.user;
    if (cb) cb()
  },
  loggedIn: function () {
    return !!sessionStorage.token
  },
  getHeaders: function() {
    return { Authorization: sessionStorage.token };
  },
}

