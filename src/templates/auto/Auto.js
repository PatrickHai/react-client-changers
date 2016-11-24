import React from 'react';
import ImageBox from '../../components/ImageBox';
import Heading from '../../components/Heading';
import ButtonBox from '../../components/ButtonBox';
import Dialog from '../../components/Dialog';
import * as ComponentNames from './ComponentNames';
import PageTitle from '../../components/PageTitle';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from './actionCreators';
import '../../styles/auto.css';

class Auto extends React.Component{
  componentWillMount(){
    this.props.actions.loadComponents(this.props.params.id);
  }
  determine(obj){
    switch(obj.name){
      case ComponentNames.PAGE_TITLE:
        return <PageTitle title={obj.props.name} key={Math.random()}/>
      case ComponentNames.IMAGE_BOX:
        return <ImageBox data={obj.props} key={Math.random()} type={this.props.auto.type}/>
      case ComponentNames.DIALOG:
        return <Dialog content={obj.props.content} key={Math.random()}/>
      case ComponentNames.HEADING:
        return <Heading data={obj.props} key={Math.random()}/>
      case ComponentNames.BUTTON_BOX:
        return <ButtonBox data={obj.props} key={Math.random()}/>
      default: return '';
    }
  }
  render(){
    this.props.auto.data.forEach((obj) => {
      if(obj.name === 'ButtonBox' && obj.props.bottom){
        this.style = {'paddingBottom': '2.5rem'};
      }else{
        this.style = {};
      }
    });
    return (
      <div style={this.style}>
        {
          this.props.auto.data.map(obj => {
            return this.determine(obj);
          })
        }
        </div>
      )
    }
}


export default connect(
  state => {
    return {auto:state.auto};
  },
  dispatch => ({actions: bindActionCreators(actionCreators, dispatch)})
)(Auto);