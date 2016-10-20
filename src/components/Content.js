import React, {PropTypes} from 'react';
import Textblocks from './Textblocks';

class Content extends React.Component{
  render(){
    let content = this.props.data.content;
    let notes = this.props.data.use_note;
    return (
      <section className="desc content">
        <Textblocks dialogs={content.dialogs} title={content.title} />
{/*        {
          notes.map((note) => (
            <Textblocks title={note.title} lines={note.list} key={Math.random()}/>
          ))
        }*/}
      </section>
    );
  }
}

Content.propTypes = {
  data: PropTypes.object
};

export default Content;