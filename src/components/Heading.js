import React from 'react';

class Heading extends React.Component{
  render(){
    if(this.props.data.level === 1){
      this.style = 'heading1';
    }else{
      this.style = 'heading2';
    }
    return (
       <section className={this.style}>
         {this.props.data.content}
       </section>
    );
  }
}
export default Heading;