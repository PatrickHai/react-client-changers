import React from 'react';

class ButtonBox extends React.Component{
  handleClick(){
    this.props.data.handleClick();
  }
  render(){
    if(this.props.data.bottom){
      this.style = 'btn bottom_btn';
    }else{
      this.style = 'btn';
    }
    return (
      <a href={this.props.data.href} id={this.props.data.id} className={this.style}>
        <span onClick={this.handleClick.bind(this)}>{this.props.data.text}</span>
      </a>
    );
  }
}
export default ButtonBox;