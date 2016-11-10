import React from 'react';

class ButtonBox extends React.Component{
  render(){
    return (
      <a href={this.props.href} id={this.props.id} className={this.props.style}>
        <span>{this.props.text}</span>
      </a>
    );
  }
}
export default ButtonBox;