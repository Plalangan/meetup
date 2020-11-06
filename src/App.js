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




componentDidMount(){
  this.updateEvents();
}

updateEvents = (lat, lon) => {
  getEvents(lat, lon).then(events => this.setState({ events }));
 };

 render() {
  return (
    <div className="App">
      <NumberOfEvents updateEvents={this.updateEvents}/>
      <br></br><CitySearch updateEvents={this.updateEvents}/>
      <EventList events={this.state.events}/>
    </div>
    );
  }
};

export default App;