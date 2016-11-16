const global = {'os':'ios','version':'2.5.0','right':{'id':126,'name':'e\u4ee3\u6cca','type':2}};

export function getCookie(c_name){
  if (document.cookie.length>0){
    let c_start, c_end;
    c_start = document.cookie.indexOf(c_name + '=');
    if (c_start != -1){ 
      c_start = c_start + c_name.length+1;
      c_end = document.cookie.indexOf(';',c_start);
      if (c_end == -1) c_end = document.cookie.length;
      return unescape(document.cookie.substring(c_start,c_end));
      } 
    }
  return '';
}

export function jumpCard(){
  if (global.os == 'ios'){
    window.CKNative.pushViewControllerContent('CKMembershipListViewController','{present:1}');
  } else {
    window.CKNative.jumpToNativePage('GroupChoosenAcivity','');
  }
}

export function jumpLogin(){
  if (global.os == 'ios'){
    window.CKNative.pushViewControllerContent('CKLoginRegistViewController','{present:1}');
  } else {
    window.CKNative.jumpToNativePage('LoginRegistEnteranceActivity','');
  }
}