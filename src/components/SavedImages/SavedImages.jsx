import React, { Component } from 'react';
<<<<<<< HEAD
import './SavedImages.css';

export default class Rover extends Component{

=======
import SavedImagesItem from '../SavedImagesItem/SavedImagesItem.jsx';

export default class SavedImages extends Component{
>>>>>>> 20ffc765159c57ad97cd78476dba5af5ed6d414a

  renderSavedImages() {
    console.log('saved images.............', this.props);
    return this.props.savedImages.map((result, i) =>
      <SavedImagesItem
        DeleteButton={this.props.DeleteButton}
        username={this.props.username}
        getSavedImages={this.props.getSavedImages}
        deleteSaved={this.props.deleteSaved}
        roverurl={result.roverurl}
        bingurl={result.bingurl}
        visiontext={result.visiontext}
        key={i}
        id={result.search_id}
      />
    )
  }

  render(){
    return (
      <div className="saved-image-container">

        {this.renderSavedImages()}

      </div>
    );
  }
}
