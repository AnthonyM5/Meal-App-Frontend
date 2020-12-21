import ReactFileReader from 'react-file-reader';
import React, { Component } from 'react';
import Prediction from './Prediction'
// import { connect } from 'react-redux'

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
    // const img = document.getElementById('img').src
    // const toggle = img ?? 
    const { history } = this.props
    console.log(this.props)
    return(
      <div className="files">
        <ReactFileReader handleFiles={this.handleFiles}>
          <button className='btn'>Upload</button>
        </ReactFileReader>
        <p>Predictions</p>
        <img src={this.state.url} id="img" alt={this.state.file.name}/>
        <p>{this.state.url ? <button onClick={this.handlePrediction}>Predict</button> : null}</p>
        <p>{this.state.prediction ? this.state.prediction[0].className : null}</p>
        <button onClick={ history.goBack }>Go back!</button>
        
      </div>
    )
  }
}





export default FileReader