import React from 'react';

class Share extends React.Component{
  render(){
    return (
        <section className="feed-box">
          <h3 className="special_code special_title">
            <span>常客分享</span>
          </h3>
          <ul className="feed-list">
            <li>
              <a href="javascript:;">
                <div className="item">
                  <div className="shop-logo">
                    <img src="http://img.changker.com/75/43/3d/75433d71038de22ae1ed0c7ebc2c9562@180w"/></div>
                  <div className="feed-body">
                    <div className="head-box">
                      <span className="nick">1995lykeke</span>
                      <div className="icon-group"> 
                        <i></i>
                      </div>
                    </div>
                    <p className="feed-content">没有面条吃</p>
                  </div>
                  <div className="clear"></div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:;" >
                <div className="item">
                  <div className="shop-logo">
                    <img src="http://img.changker.com/c3/81/c6/c381c6361f4fde67048cab48c12e596d" /></div>
                  <div className="feed-body">
                    <div className="head-box">
                      <span className="nick">开心奶爸</span>
                      <div className="icon-group"> 
                        <i></i>
                      </div>
                    </div>
                    <p className="feed-content">人多时用CIP权益还是挺方便滴</p>
                  </div>
                  <div className="clear"></div>
                </div>
              </a>
            </li>
          </ul>
          <a href="javascript:;" className="more_feed">
            查看更多
            <i></i>
          </a>
        </section>
    )
  }
}

export default Share;