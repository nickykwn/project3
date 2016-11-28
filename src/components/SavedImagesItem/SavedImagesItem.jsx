import React, { Component } from 'react';
import './SavedImagesItem.css';

export default class SavedImagesItem extends Component{

  render(){
    return (
      <div className="saved-container">
        <div className="saved-image-container">
            <img src={this.props.roverurl} />
            <img src={this.props.bingurl} />
        </div>  
        <div className="saved-vision-container">
          <h3>{this.props.visiontext}</h3>
        </div>
        <h3>X</h3>
      </div>
    );
  }
}
