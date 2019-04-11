import React, { Component } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';


class Header extends Component {


  render() {
    return (
      <div style={{
        height: this.props.height*0.1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2
      }}>


        <p style={{
          color: '#19BCCB',
          fontStyle: 'italic',
          fontSize: 32,
          paddingLeft: this.props.width*0.05
        }}>
          Influenze
        </p>

          <h3 style={{
            color: '#19BCCB',
            paddingRight: this.props.width*0.01

          }}>
            Login
          </h3>
      </div>
    );
  }
}

export default Header;

const styleDropDown = {
    backgroundColor: 'white',
    border: 1,
    borderColor: '#19BCCB',
    height: 25,
    width: 75
}
