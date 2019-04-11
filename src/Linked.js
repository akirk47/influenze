import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Linked extends Component {
  render() {
    return (
      <div>
        <Link to="/" >You've been linked</Link>
      </div>
    );
  }
}

export default Linked;
