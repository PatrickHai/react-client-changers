import React from 'react';

class ArticleHeader extends React.Component{
  render(){
    let create_time = this.props.create_time.substr(0,10);
    return (
        <header>
          <div className="title">
            <h1 className="txt_xxl">{this.props.title}</h1>
            <p>
              <span>{create_time}</span>
            </p>
          </div>
          <div className="img_wrap">
            <img src={this.props.cover} alt="文章头图" /></div>
        </header>
      )
  }
}

export default ArticleHeader;