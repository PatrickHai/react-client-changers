import React from 'react';

class ButtonBox extends React.Component{
  handleClick(){
    this.props.handleClick();
  }
  render(){
    return (
      <a href={this.props.href} id={this.props.id} className={this.props.style}>
        <span onClick={this.handleClick.bind(this)}>{this.props.text}</span>
      </a>
    );
  }
}
export default ButtonBox;