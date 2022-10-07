import React, { Component } from 'react';
import './BoxBasic.css';

class BoxBasic extends Component {
  render() {
    return (
      <div className={`Box-dem  ${this.props.color}`} >

      </div>
    );
  }
}

export default BoxBasic




