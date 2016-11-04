import React from 'react';

class Comments extends React.Component{
  render(){
    let saying = this.props.saying;
    return (
        <div className="comments">
          <div className="com_title">
            <span className="likes">赞 {saying.likes}</span>
            <span className="coms">评论 {saying.coms}</span>
            <div className="line_title"></div>
          </div>
          {
            saying.comments.map((comment) => {
              return <div className="comment" key={Math.random()}>
                        <div className="layout_box box-center-v">
                          <div className="img_wrap_com">
                            <img src={comment.profile_photo} /></div>
                          <div className="box_col_com">
                            <p>
                              <span>{comment.name}</span>
                              {
                                comment.icons.map((icon) => {
                                  return <img src={icon} className="icon_R_com" key={Math.random()}/>
                                })
                              }
                              </p>
                            <span className="S_txt1 txt_xs">
                              {comment.time} {comment.location}
                            </span>
                          </div>
                        </div>
                        <div className="S_txt1 comment_text">{comment.text}</div>
                        <div className="line"></div>
                      </div>
            })
          }
        </div>
      )
  }
}

export default Comments;