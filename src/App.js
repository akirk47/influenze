import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from './Home.js';
import Linked from './Linked.js';
import Header from './Header.js';
import InfluencerCard from './InfluencerCard.js';
import BusinessStatsCard from './BusinessStatsCard.js'

class App extends Component {
  render() {
    return (

        <BrowserRouter>
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path='/linked' component={Linked} />
          <Route exact={true} path='/influencers' component={InfluencerCard} />
          <Route exact={true} path='/restaurants' component={BusinessStatsCard} />
        </BrowserRouter>

    );
  }
}

export default App;
