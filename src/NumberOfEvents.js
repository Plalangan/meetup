import React, { Component } from 'react';
import { ErrorAlert } from './Alert';



class NumberOfEvents extends Component {

state = { numberOfEvents: 32,
          ErrorText: '',
}

handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
    if(value < 1) {
      this.setState({ErrorText: 'Number should be at least 1'});
    }
    else {
      this.setState({ErrorText: ''});
    }
}
 render() {
    return (
        <div className="NumberOfEvents">
            <ErrorAlert text={this.state.ErrorText}/>
            <label>Number of events shown: </label>
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
