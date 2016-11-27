import React, { Component } from 'react';
import './SavedImages.css';

export default class Rover extends Component{


  componentWillMount() {
    this.props.getSavedImages();
  }

  render(){
    return (
      <div>
        <h3>Saved Images</h3>
        {this.props.savedImages}
      </div>
    );
  }
}
