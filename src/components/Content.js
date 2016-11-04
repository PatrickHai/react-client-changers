import React, {PropTypes} from 'react';
import Textblocks from './Textblocks';
import Desc from './Desc';

class Content extends React.Component{
  render(){
    let notes = this.props.data.use_note;
    return (
      <section className="desc content">
      {
        notes.map((note) => {
            if(note.title == '权益亮点'){
              return <Textblocks title={note.title} dialogs={note.list} key={Math.random()}/>
            }
          })
      }
        <Desc title="权益介绍" content= {this.props.data.content} />
        {
          notes.map((note) => {
            if(note.title !== '权益亮点'){
              return <Textblocks title={note.title} dialogs={note.list} key={Math.random()}/>
            }
          })
        }
      </section>
    );
  }
}

export default Content;
