import React, {PropTypes} from 'react';
import SelectBox from './SelectBox';
import ButtonBox from './ButtonBox';

class FormContent extends React.Component{
  render(){
    return (
      <section className="form-box">
          <form className="form" action={this.props.url} method={this.props.method}>
              <SelectBox title="请选择机场" />
              <ButtonBox href="" style="btn main_btn submit_result unlogin nocard nolevel auth_nofeed" text="立即领取" />
              <ButtonBox href="" style="sub_btn" text="送好友常权益 兑换更多次数" />
              <ButtonBox href="" style="bind_card" text=" 认证会籍，升级精英常客 &gt;" />
          </form>
      </section>
    );
  }
}

FormContent.propTypes = {
  url: PropTypes.string,
  method: PropTypes.string
};


export default FormContent;