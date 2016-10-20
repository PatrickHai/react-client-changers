import React, {PropTypes} from 'react';


class Summary extends React.Component{
  render(){
    return (
        <section className="info">
            <p className="title">{this.props.title}</p>
            <p className="sub_title">{this.props.sub_title}</p>
            <div className="condition">
                <p className="general"> 精英常客金卡1次</p>
            </div>
        </section>
      );
  }
}

Summary.propTypes = {
  title: PropTypes.string,
  sub_title: PropTypes.string
};

export default Summary;