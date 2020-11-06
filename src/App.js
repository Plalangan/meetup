import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';

class App extends Component {

state = { 
  events: []
};


updateEvents = (lat, lon) => {
 getEvents(lat, lon).then(events => this.setState({ events }));
};

componentDidMount(){
  this.updateEvents();
}

 render() {
  return (
    <div className="App">
      <EventList events={this.state.events}/>
      <CitySearch updateEvents={this.updateEvents}/>
      <NumberOfEvents updateEvents={this.updateEvents}/>
    </div>
    );
  }
};

export default App;