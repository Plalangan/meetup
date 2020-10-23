import React, { Component } from 'react';




class NumberOfEvents extends Component {

state = { numberOfEvents: 32 }

handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value })
}
 render() {
    return (
        <div className="NumberOfEvents">
            <label>Number of Events:</label>
            <input 
              type="text"
              id="numberOfEventsInput"
              value={this.state.NumberOfEvents}
              onChange={this.handleInputChanged}
              />
        </div>
    );
  }
}

export default NumberOfEvents;
