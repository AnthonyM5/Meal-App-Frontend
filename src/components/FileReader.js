import ReactFileReader from 'react-file-reader';
import React, { Component } from 'react';
import Prediction from './Prediction'

class FileReader extends Component {
  state = {
    file : "",
    prediction: ""
  }

  handleFiles = files => {
    let obj = URL.createObjectURL(files[0])
    this.setState({
      file: files[0],
      url: obj
    })
  }

  handlePrediction = () => {
    let prediction = new Prediction()
    prediction.NewPrediction()
    .then(predictions =>  this.setState({
      prediction: predictions}))
  }


  render() {
    console.log(this.state.prediction)
    return(
      <div className="files">
        <ReactFileReader handleFiles={this.handleFiles}>
          <button className='btn'>Upload</button>
        </ReactFileReader>
        <p>Predictions</p>
        <img src={this.state.url} id="img" alt={this.state.file.name}/>
        <button 
        onClick={this.handlePrediction}
        >Predict</button>
      </div>
    )
  }
}





export default FileReader