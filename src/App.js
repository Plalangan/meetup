import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import { OfflineAlert } from './Alert';

class App extends Component {

state = { 
  events: [],
  offlineText: '',
};




componentDidMount(){
  this.updateEvents();
   if(navigator.onLine === false) {
    this.setState({ offlineText: 'You are Offline, Event list is loaded from last session'});
    console.log(this.state.offlineText);
  }
  else {
    this.setState({offlineText:''})
    console.log(this.state.offlineText);
  };
};

updateEvents = (lat, lon) => {
 

  getEvents(lat, lon).then(events => this.setState({ events }));
 };

 render() {
  return (
    <div className="App">
      <OfflineAlert text={this.state.offlineText}/>
      <NumberOfEvents updateEvents={this.updateEvents}/>
      <br></br><CitySearch updateEvents={this.updateEvents}/>
      <EventList events={this.state.events}/>
    </div>
    );
  }
};

export default App;