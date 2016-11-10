import React from 'react';

class ArticleDes extends React.Component{
  render(){
    return (
          <div className="inscription S_txt1" style={{'boxShadow':'0 -3.125rem 6.25rem rgba(0,0,0,.5)'}}>
              <p>{this.props.desc}</p>
          </div>
      )
  }
}

export default ArticleDes;