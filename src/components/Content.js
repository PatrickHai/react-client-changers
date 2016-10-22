import React, {PropTypes} from 'react';
import Textblocks from './Textblocks';

class Content extends React.Component{
  render(){
    let notes = this.props.data.use_note;
    return (
      <section className="desc content">
        {
          notes.map((note) => (
            <Textblocks title={note.title} dialogs={note.list} key={Math.random()}/>
          ))
        }
      </section>
    );
  }
}

Content.propTypes = {
  data: PropTypes.object
};

export default Content;