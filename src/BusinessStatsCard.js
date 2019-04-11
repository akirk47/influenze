import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import businessInfoGraphic from './BusinessStatsInfographic.jpg'

class BusinessStatsCard extends Component {
  render() {
    return (
      <div style={{display: 'flex'}}>


          <div style={{  width:this.props.width*0.4, height: this.props.height*0.8, paddingLeft:this.props.width*0.05, flexDirection:'column', justifyContent:'center'}}>
            <h1 style={{textAlign:'center', paddingTop: 100, paddingBottom:50, color: '#19BCCB', fontSize: 50}} >Businesses</h1>
            <p style={{color:'#19BCCB', fontSize: 20}}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>

          </div>
          <div style={{ width: this.props.width*0.55, height: this.props.height*0.8, paddingLeft: 50 }}>
            <img src={businessInfoGraphic} alt='influencer' style={{ width:this.props.width*0.55, height: this.props.height*0.8 }}/>
          </div>

      </div>
    );
  }
}

export default BusinessStatsCard;
