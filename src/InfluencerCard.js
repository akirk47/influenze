import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import influencerCartoon from './InfluencerCartoon.jpeg'

class InfluencerCard extends Component {
  render() {
    return (
      <div style={{display: 'flex', backgroundColor: '#19BCCB'}}>

          <div style={{ width:this.props.width*0.5, height: this.props.height*0.8, paddingRight: 50 }}>
            <img src={influencerCartoon} alt='influencer' style={{ width: this.props.width*0.4, height: this.props.height*0.6 }}/>
          </div>
          <div style={{  width:this.props.width*0.4, height: this.props.height*0.8, flexDirection:'column', justifyContent:'center'}}>
            <h1 style={{textAlign:'center', paddingTop: 100, paddingBottom:50, color: 'white', fontSize: 50}} >Influencers</h1>
            <p style={{color:'white', fontSize: 20}}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>

      </div>
    );
  }
}

export default InfluencerCard;
