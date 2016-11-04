import React from 'react';

class FeedHeader extends React.Component{
  render(){
    return(
        <header className="header">
          <div className="layout_box box-center-v">
            <div className="img_wrap">
              <img src={this.props.header.profile_img} /></div>
            <div className="box_col">
              <p className="txt_cut">
                <a href="#">{this.props.header.user_name}</a>
                {
                  this.props.header.icons.map((icon) => {
                    return <img src={icon} className="icon_R" key={icon}/>
                  })
                }
              </p>
              <div className="txt_cut S_txt1 txt_s">{this.props.header.date} {this.props.header.location}</div>
            </div>
          </div>
        </header>
      )
  }
}

export default FeedHeader;