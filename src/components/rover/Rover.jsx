import React, { Component } from 'react';
import './Rover.css';

export default class Rover extends Component{

  componentWillMount() {
    this.props.getRoverImages();
  }

  render(){
    return (
      <div className="rover-container">
        <img src={this.props.roverData} alt=""/>
      </div>
    );
  }
}
