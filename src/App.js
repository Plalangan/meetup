import React, { Component } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import moment from 'moment';
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

countEventsOnADate = (date) => {
  let count = 0;
  for (let i = 0; i < this.state.events.length; i += 1){
    if(this.state.events[i].local_date === date) {
      count += 1;
    }
  }
  return count;
};

getData = () => {
  const next7Days = [];
  const currentDate = moment();
  for (let i = 0; i < 7; i +=1){
    currentDate.add(1, 'days');
    const dateString = currentDate.format('YYYY-MM-DD');
    const count = this.countEventsOnADate(dateString);
    next7Days.push({date: dateString, number: count});
  } 
  return next7Days;
};

 render() {
  return (
    <div className="App">
      <h1>MEETUP</h1>
      <OfflineAlert text={this.state.offlineText}/>
      <NumberOfEvents updateEvents={this.updateEvents}/>
      <br></br><CitySearch updateEvents={this.updateEvents}/><br></br>
      Upcoming Events:
      <ResponsiveContainer className="scatterChart" height={400}>
      <ScatterChart width={800} height={400} margin={{top: 20, right: 20, bottom: 20, left:  20}} >
      <CartesianGrid/>
      <XAxis type="category" dataKey="date" name="date"/>
      <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false}/>
      <Tooltip cursor={{ strokeDasharray : '3 3'}}/>
      <Scatter data={this.getData()} fill="#8884d8"/>
      </ScatterChart>
      </ResponsiveContainer>
      <EventList events={this.state.events}/>
    </div>
    );
  }
};

export default App;