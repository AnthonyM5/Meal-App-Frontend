import React, { Component } from 'react';
import UsersContainer from './containers/UserContainer';
import FileReader from './components/FileReader'
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Prediction from './components/Prediction';
import { setFoods } from './redux/actionCreator'

class App extends Component {

  componentDidMount(){
    this.props.setFoods()
  }

  render(){
    return (
      <div className="App">
        <UsersContainer />
        <FileReader />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Food Nutrient Calculator
          </h1>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    );
  }
  }
 

  const mapStateToProps = (state) => ({ foods: state.foods})
  
  // const mapDispatchToProps = (dispatch) => {
  //   return{
  //       deleteReview: (id) => dispatch({ type: 'DELETE_REVIEW', id}),
  //       addMeal: (name) => dispatch({type: "ADD_MEAL", name}),
  //       setFoods: (foods) => dispatch({type: "SET_FOODS", foods}),
  //       addReview: (review) => dispatch({ type: 'ADD_REVIEW', review})
  //     }
  // }

  
  
  export default connect(mapStateToProps, { setFoods })(App);
