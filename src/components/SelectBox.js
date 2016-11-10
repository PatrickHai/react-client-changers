import React from 'react';

class SelectBox extends React.Component{
  render(){
    return (
      <div id="w_0" className="widget select_box submit_only cip_city" >
          <span>{this.props.title}</span>
          <div className="select_body">
              <select className="select" name="subtype" ref="airport">
{/*                {
                  this.state.options.map(option => (
                    <option key={option.value} value={option.value}>{option.name}</option>
                  ))
                }*/}
              </select>
          </div>
      </div>
    );
  }
}

export default SelectBox;