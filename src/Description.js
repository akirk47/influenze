import React, { Component } from 'react';
import './App.css';
import viralMarketing from './viralMarketing.jpg'
import doubleInfluence from './doubleInfluence.jpg'
import HoverPicker from './HoverPicker.js';

class Description extends Component {
  render() {
    return (

      <div style={{display: 'flex', backgroundColor: '#19BCCB'}}>
          <div style={{ width:this.props.width*0.6, height: this.props.height*0.795, justifyContent:'center', alignItems:'center', display: 'flex' }}>
            <img src={doubleInfluence} alt='influencer' style={{ width:this.props.width*0.55, height: this.props.height*0.65, paddingBottom:this.props.height*0.05 }}/>

          </div>
          <div style={{  width:this.props.width*0.4, height: this.props.height*0.795, flexDirection:'column', justifyContent:'center'}}>
            <h1 style={{textAlign:'center', color: 'white', fontSize: 62}} >What We Do</h1>
            <p style={{color:'white', fontSize: 24,width:this.props.width*0.35, textAlign:'center'}}>
              Influenze connects restaurants with microinfluencers to drive more customers and increase brand awareness.
              The way it works is microinfluencers are offered free food in return for posting and tagging the restaurant on their instagram accounts, providing a cheaper alternative to using costly ads.
              Learn more about how you can reap the awesome benefits of Influenze below.
            </p>
            <HoverPicker height={this.props.height} width={this.props.width}/>
          </div>


      </div>


    );
  }
}

export default Description;
