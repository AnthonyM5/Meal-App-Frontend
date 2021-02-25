import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMeal, setMeals} from '../redux/actionCreator'
import { Redirect } from 'react-router';



class UserInput extends Component {
    state = {
        text: "",
        user: this.props.user,
        url: "",
        redirect: null
      }
    
      handleOnChange = (e) => {
        // console.log(e.target.type)
        this.setState({
          [e.target.type]: e.target.value
        })
      }

      
    
      
      handleOnSubmit(event) {
        event.preventDefault();
        // this.props.addMeal(this.state.text);
        this.props.createMeal({
          name: this.state.text,
          user: this.props.user,
          imgUrl: this.state.url
        })
        .then( results => {
          if ( results ) {
            alert(results.errors)
          } else {
            this.setState({
              redirect: true
            });
          }
        } 
        )
       
        // console.log(this.state)
        // return <Redirect to="/meals"/>
      }

      renderRedirect = () => {
        if (this.state.redirect) {
          // console.log("redirect")
          this.props.setMeals()
          return <Redirect to={{ pathname: "/meals" }}/>
        }
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
        // console.log(this.state)
        
        return (
          
          <div className="card">
            {this.renderRedirect()}
            <form onSubmit={(event) => this.handleOnSubmit(event)}> 
            <h1>Welcome {this.props.username}!</h1>
            <h4>Current Meal Count: {this.props.mealCount}</h4>
            <h3>Create a Meal:</h3>
            <label> Meal Name: 
            <input 
              type='text'
              value={this.state.text}
              onChange={this.handleOnChange} />
            </label>
            <br></br>
            <label> Image URL: 
            <input 
              type='url'
              value={this.state.url}
              onChange={this.handleOnChange} />
            </label>
            <br></br>
              <input 
              value='Create'
              type='submit' />
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



export default connect(null, {createMeal, setMeals})(UserInput)
