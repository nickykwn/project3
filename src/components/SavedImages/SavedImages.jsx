import React, { Component } from 'react';
import './SavedImages.css';
import '../App.css';
import SavedImagesItem from '../SavedImagesItem/SavedImagesItem.jsx';

export default class SavedImages extends Component{
  
  renderSavedImages() {
    console.log(this.props.savedImages.roverurl)
    return this.props.savedImages.map((result, i) => 
      <SavedImagesItem 
        roverurl={result.roverurl}
        bingurl={result.bingurl}
        visiontext={result.visiontext}
        key={i}
        id={result.id}
      />
    )
  }

  componentWillMount() {
    this.props.getSavedImages();
  }

  render(){
    return (
      <div className="saved-image-container">
        
        {this.renderSavedImages()}

      </div>
    );
  }
}
