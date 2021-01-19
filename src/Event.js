import React, { Component } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip, Legend } from 'recharts';

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

  getPieData = () => {
   var limit = this.props.event.rsvp_limit;
   var rsvp = this.props.event.yes_rsvp_count;

   var data = [
     {name: "Attending", value: rsvp},
     {name: "Spots Available", value: limit}
   ]
   return data;
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
      
        {this.props.event.rsvp_limit && this.props.event.yes_rsvp_count ? 
        <div className="rsvpChart">
          <br></br><div className="attendance">Attendance Chart</div>
          <ResponsiveContainer className="container" height={100}>
          <PieChart>
            <Pie data={this.getPieData()} dataKey={"value"} cx={55} cy={45} labelLine={false} outerRadius={40} fill="#8884d8">
              </Pie>
              <Tooltip/>
          </PieChart>
          </ResponsiveContainer>
          </div>
          :
          <div>
          </div>
          }
      </div>
      
    );
  }
}

export default Event;