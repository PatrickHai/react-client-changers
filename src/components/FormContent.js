import React from 'react';
import ButtonBox from './ButtonBox';
import auth from '../auth'

class FormContent extends React.Component{
  render(){
    if(auth.loggedIn()){
      return (
        <section className="form-box">
            <form className="form" action={this.props.url} method={this.props.method}>
                <ButtonBox style="btn main_btn" text="立即领取" />
                <ButtonBox style="btn bottom_btn" text="发体验" />
                <ButtonBox style="sub_btn" text="送好友常权益 兑换更多次数" />
                <ButtonBox style="bind_card" text=" 认证会籍，升级精英常客 &gt;" />
            </form>
        </section>
      );
    }else{
      return (
        <section className="form-box">
            <form className="form" action={this.props.url} method={this.props.method}>
                <ButtonBox style="btn main_btn" text="立即领取" />
            </form>
        </section>
      );
    }

  }
}


export default FormContent;
