import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Description from './Description.js';
import HoverPicker from './HoverPicker.js';
import Divider from './Divider.js';
import InfluencerCard from './InfluencerCard.js';
import BusinessStatsCard from './BusinessStatsCard.js'
import Header from './Header.js'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div style={{height: this.state.height, width: this.state.width}}>
          <Header height={this.state.height} width={this.state.width}/>
          <div style={{height: this.state.height*0.1, width: this.state.width, alignItems:'center', display:'flex', justifyContent:'center', backgroundColor:  '#19BCCB'}}>
              <p style={{fontFamily:'verdana', color:'white', fontStyle:'italic', fontSize: this.state.height*0.04}}>Driving Restaurants forward through the reach of MicroInfluencers</p>
          </div>
          <Divider height={this.state.height} width={this.state.width} />
          <Description height={this.state.height} width={this.state.width}/>

      </div>
    );
  }
}

export default Home;
