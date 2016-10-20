import React, {PropTypes} from 'react';

class ButtonBox extends React.Component{
  render(){
    return (
      <a href={this.props.href} id={this.props.id} className={this.props.style}>
        <span>{this.props.text}</span>
      </a>
    );
  }
}

ButtonBox.propTypes = {
  href: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.string,
  text: PropTypes.string
};

export default ButtonBox;