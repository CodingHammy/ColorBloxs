import React, { Component } from 'react';
import BoxBasic from './BoxBasic';
import './Box.css';



class Box extends Component {
  static defaultProps = {
    colors: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'teenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth']
  };
  constructor(props) {
    super(props);
    this.state = {
      box1: 'first',
      box2: 'second',
      box3: 'third',
      box4: 'fourth',
      box5: 'fifth',
      box6: 'sixth',
      box7: 'seventh',
      box8: 'eighth',
      box9: 'ninth',
      box10: 'teenth',
      box11: 'eleventh',
      box12: 'twelfth',
      box13: 'thirteenth',
      box14: 'fourteenth',
      box15: 'fifteenth',
      box16: 'sixteenth'
    };

  };
  clickHandler() {
    console.log('clicked');
    // this.props.colorPicker();
  };
  colorPicker() {
    // let Idx = Math.floor(Math.random() * this.props.colors.length);
    // return this.props.colors[Idx];
  };
  render() {
    return (
      <div className='Box'>
        <BoxBasic onClick={this.clickHandler} color={this.state.box1} />
        <BoxBasic onClick={this.clickHandler} color={this.state.box2} />
        <BoxBasic onClick={this.clickHandler} color={this.state.box3} />
        <BoxBasic onClick={this.clickHandler} color={this.state.box4} />
        <BoxBasic onClick={this.clickHandler} color={this.state.box5} />
        <BoxBasic onClick={this.clickHandler} color={this.state.box6} />
        <BoxBasic onClick={this.clickHandler} color={this.state.box7} />
        <BoxBasic onClick={this.clickHandler} color={this.state.box8} />
        <BoxBasic onClick={this.clickHandler} color={this.state.box9} />
        <BoxBasic onClick={this.clickHandler} color={this.state.box10} />
        <BoxBasic onClick={this.clickHandler} color={this.state.box11} />
        <BoxBasic onClick={this.clickHandler} color={this.state.box12} />
        <BoxBasic onClick={this.clickHandler} color={this.state.box13} />
        <BoxBasic onClick={this.clickHandler} color={this.state.box14} />
        <BoxBasic onClick={this.clickHandler} color={this.state.box15} />
        <BoxBasic onClick={this.clickHandler} color={this.state.box16} />
      </div>

    );
  }
}

// 16 boxes
// can't do same color twice
// each box starts on different color

export default Box;