import React from 'react';

class Share extends React.Component{
  render(){
    if(!this.props.feeds || this.props.feeds.length<1) return (<section></section>);
    return (
        <section className="feed-box">
          <h3 className="special_code special_title">
            <span>常客分享</span>
          </h3>
          <ul className="feed-list">
          {
            this.props.feeds.map((feed) => {
              return (
                      <li key={Math.random()}>
                        <a href="javascript:;">
                          <div className="item">
                            <div className="shop-logo">
                              <img src={feed.img}/>
                            </div>
                            <div className="feed-body">
                              <div className="head-box">
                                <span className="nick">{feed.nick}</span>
                                <div className="icon-group"> <i></i>
                                </div>
                              </div>
                              <p className="feed-content">{feed.content}</p>
                            </div>
                            <div className="clear"></div>
                          </div>
                        </a>
                      </li>
                )
            })
          }
          </ul>
          <a href="javascript:;" className="more_feed"> 查看更多 <i></i>
          </a>
        </section>
    )
  }
}

export default Share;