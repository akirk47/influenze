import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';


class HoverPicker extends Component {
  render() {
    return (
      <div style={{height: this.props.height*0.05, paddingTop: this.props.height*0.025, width: this.props.width*0.4, alignItems:'center', display:'flex', justifyContent:'center', backgroundColor:  '#19BCCB'}}>
          <p style={{fontFamily:'verdana', color:'white', fontSize: 30}}>Im A:</p>
          <Link to='/influencers'><button className=" button buttonHover">Influencer</button></Link>
          <Link to='/restaurants'><button className="button buttonHover" >Restaurants</button></Link>
      </div>
    );
  }
}

export default HoverPicker;
