import React from 'react';

class FeedContent extends React.Component{
  render(){
      return (
        <div className="main">
          <p>{this.props.summary}</p>
          {
            this.props.content.images.map((image) => {
              return <div className="wrap" key={image}><img src={image} /></div>
            })
          }
        </div>
      )
  }
}

export default FeedContent;