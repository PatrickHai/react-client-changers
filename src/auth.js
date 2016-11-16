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
      return {};
    }
  },
  setUser:function(user){
    sessionStorage.user = JSON.stringify(user);
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
    return {
      uid: this.getUser().id,
      Authorization: sessionStorage.token,
      'Content-Type':'application/json;charset:utf-8'
    };
  },
}

