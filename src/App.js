import React, { Component } from 'react';
import UsersContainer from './containers/UserContainer';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <UsersContainer />
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
 

  const mapStateToProps = (state) => ({ reviews: state.reviews})
  
  const mapDispatchToProps = (dispatch) => {
    return{
        deleteReview: (id) => dispatch({ type: 'DELETE_REVIEW', id}),
        addReview: (review) => dispatch({ type: 'ADD_REVIEW', review})
      }
  }

  
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);
