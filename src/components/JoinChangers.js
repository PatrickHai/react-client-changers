import React from 'react';

class JoinChangers extends React.Component{
  jumpUrl(){}
  closeTitle(){}
  render(){
    return (
        <aside className="layout_box box-center-v layer_dl" id="float_title">
          <div className="logo"></div>
          <div className="txt_s box_col">
            <p>常客</p>
            <p>百万差旅人的选择</p>
          </div>
          <a href="javascript:;" onClick={this.jumpUrl.bind(this)} className="W_btn_g" >立即打开</a>
          <a href="javascript:;" onClick={this.closeTitle.bind(this)}><i className="W_icon icon_close"></i></a>
        </aside>
      )
  }
}

export default JoinChangers;