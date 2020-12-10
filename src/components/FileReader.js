import ReactFileReader from 'react-file-reader';
import React, { Component } from 'react';

class FileReader extends Component {
  state = {
    file : ""
  }

  handleFiles = files => {
    let obj = URL.createObjectURL(files[0])
    this.setState({
      file: files[0],
      url: obj
    })
  }
  render() {
    console.log(this.state)
    return(
      <div className="files">
        <ReactFileReader handleFiles={this.handleFiles}>
          <button className='btn'>Upload</button>
        </ReactFileReader>

        <p>Read</p>
        <img src={this.state.url} />
      </div>
    )
  }
}

export default FileReader