import React, { Component } from 'react';
import './Vision.css';

export default class Vision extends Component{
  render(){
    return (
      <div id="vision-container">
        <button className="vision-button" onClick={() => {this.props.getVisionData(this.props.roverImage)}}>{this.props.visionText}</button>
      </div>
    );
  }
}
