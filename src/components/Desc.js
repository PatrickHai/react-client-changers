import React from 'react';

class Desc extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      description: 'hidden',
      show_more: 'show_more',
      collect: 'collect hide'
    };
  }
  showMore(){
    this.setState({
      description: '',
      show_more: 'show_more hide',
      collect: 'collect'
    });
  }
  collect(){
    this.setState({
      description: 'hidden',
      show_more: 'show_more',
      collect: 'collect hide'
    });
  }
  render(){
    let _this = this;
    return (
    <div className="special_details content">
      <div className="special_details_container">
        <h3 className="resturant_special special_title"><span>{this.props.title}</span></h3>
        <ul className="ul_style li_without_style">
          <div id="description" className={this.state.description}>
            <div dangerouslySetInnerHTML={{__html: this.props.content}} />
          </div>
          <p className={this.state.show_more} onClick={_this.showMore.bind(_this)}>
              全文<i></i>
          </p>
          <p className={this.state.collect} onClick={_this.collect.bind(_this)}>
              收起<i></i>
          </p>
        </ul>
      </div>
    </div>
    );
  }
}

export default Desc;
