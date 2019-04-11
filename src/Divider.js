import React, { Component } from 'react';

class Divider extends Component {
  render() {
    return (
      <div style={{height: this.props.height*0.0005, width: this.props.width, backgroundColor:  'white'}}>
      </div>
    );
  }
}

export default Divider;
