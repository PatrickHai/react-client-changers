import React, {PropTypes} from 'react';

class Textblocks extends React.Component{
  render(){
    return (
          <div className="special_details content">
              <div className="special_details_container">
                  <h3 className="special_title">
                      <span>{this.props.title}</span>
                  </h3>
                  <ul className={this.props.ulstyle}>
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
      );
  }
}

Textblocks.propTypes = {
  title: PropTypes.string,
  ulstyle: PropTypes.string,
  dialogs: PropTypes.array
};

export default Textblocks;