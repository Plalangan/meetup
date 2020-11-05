import React, { Component } from "react";

class Event extends Component {
  state = {
    showDetails: false,
  };

  handleShowDetails = () => {
    if (this.state.showDetails === false) {
      this.setState({ showDetails: true });
    } else {
      this.setState({ showDetails: false });
    }
  };

  render() {
    return (
      <div className="event">
        <div className="event__Overview">
        <div className="event__Overview--name"><h1>Event:</h1> {this.props.event.name}</div>
          {this.props.event.group && this.props.event.group.name && (
            <div className="event__Overview--groupName">
             <h1>Group:</h1> {this.props.event.group.name}
            </div>
          )}
          
          <div className="event__Overview--localTime">
            <h1>Time:</h1> {this.props.event.local_time}
          </div>
          <div className="event__Overview--localDate">
            <h1>Date:</h1> {this.props.event.local_date}
          </div>
          <div className="event__Overview--peopleGoing">
            <br></br>{this.props.event.yes_rsvp_count} people are going!
          </div>
         
          <button
            className="details-btn"
            onClick={() => this.handleShowDetails()}
          >
            show details
          </button>
        </div>
        {this.state.showDetails && (
          <div className="event__Details">
            <div className="event__Details--description">
              {this.props.event.description}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Event;