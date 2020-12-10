import React, { Component } from 'react';


class UserInput extends Component {
    state = {
        text: ""
      }
    
      handleOnChange = (e) => {
        this.setState({
          text: e.target.value
        })
      }
    
      
      handleOnSubmit(event) {
        event.preventDefault();
        this.props.addMeal(this.state.text);
        this.setState({
          text: ''
        });
      }

      // handleFile = (e) => {
      //   const content = e.target.result;
      //   console.log('file content',  content)
      //   // You can set content in state and show it in render.
      // }
      
      // handleChangeFile = (file) => {
      //   let fileData = new FileReader();
      //   fileData.onloadend = handleFile;
      //   fileData.readAsText(file);
      // }
    
      render() {
        return (
          
          <div>
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
              <input 
              type='text'
              value={this.state.text}
              onChange={this.handleOnChange}
              />
              <input type='submit' />
            </form>
          </div>
        );
      }; 
       
      // render(){
      //   return(
      //      <div>
      //         <input type="file" accept=".txt" onChange={e => 
      //             handleChangeFile(e.target.files[0])} /> 
      //      </div>
      //   )
      // }


};



export default UserInput
