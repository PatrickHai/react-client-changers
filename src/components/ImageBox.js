import React from 'react';

class ImageBox extends React.Component {
  render(){
    return (
      <section className={this.props.style}>
        <img src={this.props.url} alt={this.props.name}  />
      </section>
      );
  }
}

export default ImageBox;