import React from 'react';

class ArticleContent extends React.Component{
  render(){
    return (
        <article className='W_innerWrap'>
          <div dangerouslySetInnerHTML={{__html: this.props.content}} />
        </article>
      )
  }
}

export default ArticleContent;