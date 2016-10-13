import React from 'react';
import { render } from 'react-dom';
import fetch from 'isomorphic-fetch';
import signals from 'signals';
import './styles/base.css';
import './styles/template.css';
import './styles/swiper.min.css';

let broadData=new signals.Signal(); //全局数据广播对象
let data={};  //总数据对象

let TopImage = React.createClass ({
  render: function(){
    let image_src = this.props.url;
    let image_alt = this.props.name;
    return (
      <section className="head-box">
        <img src={image_src} alt={image_alt}  />
      </section>
      );
  }
});

let Info = React.createClass({
  render: function(){
    let title = this.props.title;
    let sub_title = this.props.sub_title;
    return (
        <section className="info">
            <p className="title">{title}</p>
            <p className="sub_title">{sub_title}</p>
            <div className="condition">
                <p className="general"> 精英常客金卡1次 <span className="price"><i id="price"></i></span> </p>
            </div>
        </section>
      )
  }
});

let FormContent = React.createClass({
  render : function(){
    return (
      <section className="form-box">
          <form className="form" action={this.props.url} method={this.props.method}>
              {
                this.props.hiddens.map((d) => (
                    <input key={d.key} name={d.key} type="hidden" value={d.value} />
                  ))
              }
              <SelectBox title="请选择机场" />
              <ButtonBox style="btn main_btn submit_result unlogin nocard nolevel auth_nofeed" text="立即领取" />
              <ButtonBox style="sub_btn" text="送好友常权益 兑换更多次数" />
              <ButtonBox style="bind_card" text=" 认证会籍，升级精英常客 &gt;" />
          </form>
      </section>
    )
  }
});

let SelectBox = React.createClass({
  getInitialState: function(){
    return {options: []}
  },
  componentDidMount: function(){
    ajaxCalling('http://localhost:9000/api/airports', 'GET').then(res => {
      this.setState({
        options: JSON.parse(res)
      })
    });
  },
  imageChangeHandler: function(e){
    data.airport = e.target.value;
    broadData.dispatch(data);
  },
  render: function(){
    return (
      <div id="w_0" className="widget select_box submit_only cip_city" >
          <span>{this.props.title}</span>
          <div className="select_body">
              <select onChange={this.imageChangeHandler} className="select" name="subtype" ref="airport">
                <option></option>
                {
                  this.state.options.map(option => (
                    <option key={option.value} value={option.value}>{option.name}</option>
                  ))
                }
              </select>
          </div>
      </div>
    )
  }
});

/*let AlertBox = React.createClass({
  render: function(){
    return (
          <div className={this.props.style} >
              <div className="code_box">
                  <p className="code_before">{this.props.code_before}</p>
                  <p className="code">{this.props.code}</p>
                  <p className="code_after">{this.props.code_after}</p>
              </div>
          </div>
      )
  }
});*/

let ButtonBox = React.createClass({
  render: function(){
    return (
        <a href={this.props.href} id={this.props.id} className={this.props.style}>
          <span>{this.props.text}</span>
        </a>
      )
  }
});

let TextAreaLines = React.createClass({
  render : function(){
    return (
          <div className="special_details content">
              <div className="special_details_container">
                  <h3 className="special_title "><span>{this.props.title}</span></h3>
                  <ul className="ul_style">
                  {
                    this.props.lines.map((line) =>(
                      <li key={line}>• {line}</li>
                    ))
                  }
                  </ul>
              </div>
          </div>
      );
  }
});

let TextArea = React.createClass({
  render: function(){
    return (
          <div className="special_details content">
              <div className="special_details_container">
                  <h3 className="resturant_special special_title">
                      <span>{this.props.title}</span>
                  </h3>
                  <ul className="ul_style li_without_style">
                      <div id="description">
                        {
                          this.props.dialogs.map((dialog) => (
                            <p key={dialog}>{dialog}</p>
                          ))
                        }
                      </div>
                  </ul>
              </div>
          </div>
      )
  }
});

let ImageBox = React.createClass({
  getInitialState: function(){
    return {src: "http://img.changker.com/82/ec/f4/82ecf4bd6cb48f960d1d32c4294c35e9"}
  },
  componentDidMount: function(){
    let that = this;
      broadData.add(function(data){ //收听到数据
         that.setState({
            src:data.airport
         });
      });
  },
  render: function(){
    return (
      <section className="content">
        <img src={this.state.src}/>
      </section>
      )
  }
});

let Content = React.createClass({
  render: function(){
    let data = this.props.data;
    let content = data.content;
    let notes = data.use_note;
    return (
      <section className="desc content">
        <TextArea dialogs={content.dialogs} title={content.title} />
        {
          notes.map((note) => (
            <TextAreaLines title={note.title} lines={note.list} key={Math.random()}/>
          ))
        }
      </section>
    )
  }
});

fetchTest().then(res=>{
  if(res){
      let data = JSON.parse(res).data;
      let formHiddens = [];
      formHiddens.push({key: '_csrf', value: 'l8Nb4FrID6d2dHaQN51JlmqSJggVZ2IarzfkWFe89///xDtyBpXRibIUAObzyGRN'});
      formHiddens.push({key: 'token', value: ''});

      render(
        <div>
          <TopImage url={data.banner} name={data.name}/>
          <Info title={data.name} sub_title={data.summary}/>
          <FormContent url="http://apitest.changker.com/html/benefit/platform/5" method="POST" hiddens={formHiddens} />
          <ImageBox />
          <Content data={data} />
        </div>, document.getElementById('app'));
  }else{
    console.log('ajax call failed!');
  }
});

function ajaxCalling(url, method){
  return fetch(url,{
            method: method,
            mode:'cors',
            headers:{
              'Content-Type':'application/json;charset:utf-8'
            }
         })
         .then(res=>{
            return res.json();
         });
}


function fetchTest(){
  let url = 'http://localhost:9000/api/neat';
  return fetch(url,{
            method:'GET',
            mode:'cors',
            headers:{
              'Content-Type':'application/json;charset:utf-8'
            }
         })
         .then(res=>{
           return res.json();
         });
}
