import React from 'react';
import ButtonBox from '../../../components/ButtonBox';
import auth from '../../../auth';
import * as actionCreators from '../actionCreators';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class FormContent extends React.Component{
  constructor(props) {
    super(props);
  }
  validateForm(){
    // console.log('need logic here!');
  }
  submitForm(){
    this.props.actions.grabRight(this.props.right_id);
  }
  grabCoupon(){
/*    if(!auth.loggedIn()){
      util.jumpLogin();
      return;
    }else if(!auth.getUser().card){
      util.jumpCard();
      return;
    }*/
    this.validateForm();
    this.submitForm();
  }
  render(){
    let form = this.props.form;
    if(auth.loggedIn()){
      return (
        <section className="form-box">
            <form className="form" action={form.url} method={form.method}>
                <ButtonBox style={form.grab_style} text={form.grab_text} handleClick={this.grabCoupon.bind(this)}/>
                <ButtonBox style="btn bottom_btn" text="发体验" />
                <ButtonBox style="sub_btn" text="送好友常权益 兑换更多次数" />
                <ButtonBox style="bind_card" text=" 认证会籍，升级精英常客 &gt;" />
                <div id="success_submit_code" className={form.grab.style}>
                    <div className="code_box">
                        <p className="code_before">领取成功，您已获得常权益</p>
                        <p className="code">{form.grab.code}</p>
                        <p className="code_after">有效期至：{form.grab.endtime}</p>
                    </div>
                </div>
            </form>
        </section>
      );
    }else{
      return (
        <section className="form-box">
            <form className="form" action={this.props.url} method={this.props.method}>
                <ButtonBox style={form.grab_style} text={form.grab_text} handleClick={this.grabCoupon.bind(this)}/>
            </form>
        </section>
      );
    }

  }
}

export default connect(
  state => {
    return {grab: state.rights.form.grab};
  },
  dispatch => ({actions: bindActionCreators(actionCreators, dispatch)})
)(FormContent);
