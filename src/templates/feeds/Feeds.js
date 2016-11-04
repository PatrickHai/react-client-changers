import React from 'react';
import JoinChangers from '../../components/JoinChangers';
import FeedHeader from './components/FeedHeader';
import FeedContent from './components/FeedContent';
import FeedSubject from './components/FeedSubject';
import Comments from './components/Comments';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './actionCreators';
import '../../styles/base.css';
import '../../styles/feed.css';
import '../../styles/base_react.css';

class Feeds extends React.Component{
  render(){
    return (
      <div className='article_exp feed-body'>
        <JoinChangers />
        <FeedHeader header={this.props.data.header}/>
        <FeedContent content={this.props.data.content}/>
        <FeedSubject type={this.props.data.type} subject={this.props.data.subject} />
        <Comments type={this.props.data.type} saying={this.props.data.saying}/>
      </div>
      )
  }
}

export default connect(
  state => {
    return {data:state.feeds};
  },
  dispatch => ({actions: bindActionCreators(actionCreators, dispatch)})
)(Feeds);