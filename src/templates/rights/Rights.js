import React from 'react';
import {connect} from 'react-redux';
import ImageBox from '../../components/ImageBox';
import Share from '../../components/Share';
import Summary from '../../components/Summary';
import FormContent from '../../components/FormContent';
import Content from '../../components/Content';
import * as actionCreators from './actionCreators'; 
import {bindActionCreators} from 'redux';
import * as util from '../../util';
import auth from '../../auth';
import '../../styles/base.css';
import '../../styles/template.css';
import '../../styles/base_react.css';


class Rights extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.init();
    if(auth.loggedIn()) this.refs.rights.style = 'padding-bottom: 2.5rem;';
  }
  componentDidUpdate() {
  }
  getId(){
    let id ;
    if(this.props.params.id){
      id = this.props.params.id;
    }
    return id;
  }
  init(){
    auth.setToken(util.getCookie('keyofcookie'));
    let id = this.getId();
    this.props.actions.loadComponents(id);
    this.props.actions.loadFeeds();
  }
  render(){
    return (
        <div className="benefit-body" ref="rights">
          <ImageBox style="head-box" url={this.props.data.banner} name={this.props.data.name}/>
          <Summary title={this.props.data.name} sub_title={this.props.data.summary}/>
          <FormContent url="http://apitest.changker.com/html/benefit/platform/5" method="POST" />
          <Content data={this.props.data} />
          <Share feeds={this.props.feeds} />
        </div>
    );
  }
}


export default connect(
  state => {
    return {data:state.rights.data, feeds: state.rights.feeds};
  },
  dispatch => ({actions: bindActionCreators(actionCreators, dispatch)})
)(Rights);

