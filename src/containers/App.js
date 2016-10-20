import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ImageBox from '../components/ImageBox';
import Summary from '../components/Summary';
import FormContent from '../components/FormContent';
import Content from '../components/Content';
import * as actions from '../templates/rights/actionCreators'; 
import {bindActionCreators} from 'redux';
import '../styles/base.css';
import '../styles/template.css';


class App extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.init();
  }
  componentDidUpdate() {
    this.init();
  }
  getId(){
    let id ;
    if(this.props.params.id){
      id = this.props.id;
    }
    return id ? id :5;
  }
  init(){
    let id = this.getId();
    this.props.actions.loadComponents(id);
  }
  render(){
    return (
        <div>
          <ImageBox style="head-box" url={this.props.data.banner} name={this.props.data.name}/>
          <Summary title={this.props.data.name} sub_title={this.props.data.summary}/>
          <FormContent url="http://apitest.changker.com/html/benefit/platform/5" method="POST" />
          <Content data={this.props.data} />
        </div>
    );
  }
}

App.propTypes = {
  id: PropTypes.string,
  data: PropTypes.object,
  params: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(
  state => {
    return {data:state.rights.data};
  },
  dispatch => ({actions: bindActionCreators(actions, dispatch)})
)(App);

