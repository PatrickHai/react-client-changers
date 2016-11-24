export let share = {
  share_image: "http://img.changker.com/e0/02/dc/e002dc9c9046714275ee5682e059b216",
  share_title: "常客懂你，忙碌意义",
  share_content: "测试内容"
};

wx.config({
  debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  appId: share.share_appid, // 必填，公众号的唯一标识
  timestamp: share.share_timestamp, // 必填，生成签名的时间戳
  nonceStr: share.share_noncestr, // 必填，生成签名的随机串
  signature: share.share_sign,// 必填，签名，见附录1
  jsApiList: ['checkJsApi','scanQRCode','onMenuShareAppMessage','onMenuShareTimeline'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
});

wx.ready(function(){
  wx.onMenuShareTimeline({//朋友圈
      title: share.share_title, // 分享标题
      link: "", // 分享链接
      imgUrl: share.share_image, // 分享图标
      type: '', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () { 
          // 用户确认分享后执行的回调函数
      },
      cancel: function () { 
          // 用户取消分享后执行的回调函数
      },
      fail: function () { 
          // 用户取消分享后执行的回调函数
      }
  });
  wx.onMenuShareAppMessage({//分享好友
      title: share.share_title, // 分享标题
      desc: share.share_content, // 分享描述
      link: '', // 分享链接
      imgUrl: share.share_image, // 分享图标
      type: '', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () { 
          // 用户确认分享后执行的回调函数
      },
      cancel: function () { 
          // 用户取消分享后执行的回调函数
      },
      fail: function () { 
          // 用户取消分享后执行的回调函数
      }
  });

    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。

});//
wx.checkJsApi({
    jsApiList: ['onMenuShareAppMessage','onMenuShareTimeline'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
    success: function(res) {
      //alert(res);
        // 以键值对的形式返回，可用的api值true，不可用为false
        // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
    }
});