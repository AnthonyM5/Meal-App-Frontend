import ReactFileReader from 'react-file-reader';
import React, { Component } from 'react';
import Prediction from './Prediction';
import Classifier from './Classifier';

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

    let classify = new Classifier()
    classify.NewPrediction()
  }


  render() {
    // const img = document.getElementById('img').src
    // const toggle = img ?? 
    const { history } = this.props
    // console.log(this.props)
    return(
      <div className="files">
        <h1>Predictions</h1>
        <ReactFileReader handleFiles={this.handleFiles}>
          <button>Upload</button>
        </ReactFileReader>
        <img src={this.state.url} id="img" alt={this.state.file.name}/>
        <p>{this.state.url ? <button onClick={this.handlePrediction}>Predict</button> : null}</p>
        <p>{this.state.prediction ? this.state.prediction[0].className : null}</p>
        <button onClick={ history.goBack }>Go back!</button>
        
      </div>
    )
  }
}





export default FileReader