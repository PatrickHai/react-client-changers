import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './actionCreators';
import JoinChangers from '../../components/JoinChangers';
import ArticleHeader from './components/ArticleHeader';
import ArticleDes from './components/ArticleDes';
import ArticleContent from './components/ArticleContent';
import '../../styles/base.css';
import '../../styles/base_react.css';
import '../../styles/article.css';


class Articles extends React.Component{
  render(){
    return (
        <div className='article' style={{'font-size':'0.8375rem'}}>
          <JoinChangers/>
          <section>
            <ArticleHeader title={this.props.data.title} create_time={this.props.data.create_time} 
              cover={this.props.data.cover} />      
            <ArticleDes desc={this.props.data.desc}/>      
            <ArticleContent content={this.props.data.content} />
          </section>
        </div>
    )
  }
}


export default connect(
  state => {
    return {data:state.articles};
  },
  dispatch => ({actions: bindActionCreators(actionCreators, dispatch)})
)(Articles);