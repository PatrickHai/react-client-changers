import React from 'react';

class Dialog extends React.Component{
  render(){
    return (
       <section className="dialog">
         <div>{this.props.content}</div>
       </section>
    );
  }
}
export default Dialog;