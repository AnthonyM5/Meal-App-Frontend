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
};



export default UserInput
