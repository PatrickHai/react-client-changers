import React from 'react';
import * as util from '../util';

class ImageBox extends React.Component {
  render(){
    this.tags = [];
    this.shop_info = 'shop_info';
    if(this.props.type === 1){
      this.shop_info += ' black_background';
    }
    this.url = this.props.data.url;
    if(this.props.data.top){
      this.style = 'head_img';
    }else{
      this.style = 'img';
    }
    if(this.props.data.store) {
      this.url = util.generateImgUrl(this.props.data.store.banner);
      if(this.props.data.store.benefit_tags){
        this.tags = this.props.data.store.benefit_tags.split(' ');
      }
    }
    if(this.props.data.store){
      return (
       <section>
         <div className='tuwenbingmao'>
           <img src={this.url} />
           <div className={this.shop_info}>
             <p className='store_name'>{this.props.data.store.name}</p>
             <p className='store_des'>
               {util.cut(this.props.data.store.description, 9)}
               <span>${this.props.data.store.price}/人</span>
             </p>
             <p className='store_icons'>
               {
                  this.tags.map(tag => {
                      return <span key={Math.random()}>{tag}</span>
                  })
               }
             </p>
           </div>
         </div>
       </section>
      );
    }else{
      return (
        <section className={this.style}>
          <img src={this.url} />
        </section>
      )
    }
  }
}

export default ImageBox;