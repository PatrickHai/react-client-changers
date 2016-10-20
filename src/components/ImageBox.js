import React, {PropTypes} from 'react';

class ImageBox extends React.Component {
  render(){
    return (
      <section className={this.props.style}>
        <img src={this.props.url} alt={this.props.name}  />
      </section>
      );
  }
}

ImageBox.propTypes = {
  style: PropTypes.string,
  url: PropTypes.string,
  name: PropTypes.string
};

export default ImageBox;