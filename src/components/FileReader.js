import ReactFileReader from 'react-file-reader';
import React, { Component } from 'react';
import Prediction from './Prediction';
import Classifier from './Classifier';

class FileReader extends Component {
  state = {
    file : "",
    prediction1: "",
    prediction2: ""
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
      prediction1: predictions}))

    let classify = new Classifier()
    classify.NewPrediction()
    .then(predictions => this.setState({
      prediction2: predictions
    }))
  }


  render() {
    // const img = document.getElementById('img').src
    // const toggle = img ?? 
    const { history } = this.props
    // console.log(this.props)
    return(
      <div className="dropbox">
        <h1>Predictions</h1>
        <div className="files">
        <ReactFileReader handleFiles={this.handleFiles}>
        <button>Upload</button>
        </ReactFileReader>
        <img src={this.state.url} id="img" alt={this.state.file.name}/>
        <p>Mobilenet Results: {this.state.prediction1 ? this.state.prediction1[0].className : null}</p>
        <p>CocoSsD Results: {this.state.prediction2[0] ? this.state.prediction2[0].class : "" }</p>
        </div>
        {this.state.url ? <button onClick={this.handlePrediction}>Predict</button> : null}
        <br></br>
        <button onClick={ history.goBack }>Go back!</button>
        
    
        
      </div>
    )
  }
}





export default FileReader