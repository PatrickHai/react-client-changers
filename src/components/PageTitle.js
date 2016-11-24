import React from 'react';
import Helmet from 'react-helmet';

class PageTitle extends React.Component{
  render(){
    return (
      <Helmet 
        htmlAttributes = {{'lang': 'zh'}} 
        title={this.props.title} 
        meta={[
            {'name': 'test_name', 'content': 'test_content'}
        ]}/>
    );
  }
}
export default PageTitle;