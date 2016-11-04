import React from 'react';

class FeedSubject extends React.Component{
  render(){
    let subject = this.props.subject;
    if(this.props.type === 0){
      return (
        <div className="subject">
          <img className="hotel-logo" src={subject.logo} />
          <div className="hotel">
            <span className="hotel-name">{subject.name}</span>
            <span className="hotel-category" style={{'backgroundColor':'#00a0ea'}}>{subject.category}</span>
            <div className="hotel-score">
              <span className="hotel-score-value" style={{'backgroundColor':'orange'}}>{subject.score}</span>
              <span className="hotel-score-item">{subject.score_item}</span>
            </div>
          </div>
        </div>
      )
    }else if(this.props.type === 1){
        return (
           <div className="subject">
            <div className="flight-airline">
              <span className="flight-aircraft-lying">{subject.lying}</span>
              <span className="flight-aircraft">{subject.aircraft}</span>
              <span className="flight-airline-name">{subject.airline_name}</span>
            </div>
            <img className="flight-logo" src={subject.logo} />
            <span className="flight-name">{subject.airline_name}</span>
            <span className="flight-airport">{subject.flight_line}</span>
          </div>
        )
    }else if(this.props.type === 2){
      return (
          <div className="subject">
            <img className="hotel-logo rights-logo" src={subject.logo} />
            <div className="hotel rights">
              <span className="hotel-name" style={{'overflow':'hidden', 'whiteSpace':'nowrap', 'textOverflow':'ellipsis'}}>
              {subject.name}</span>
              <span className="shop-count">{subject.shop_count}</span>
            </div>
          </div>
        )
    }
  }
}

export default FeedSubject;