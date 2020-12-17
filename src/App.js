import React, { Component } from 'react';
import UsersContainer from './containers/UserContainer';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { setFoods } from './redux/actionCreator' 
import { Link } from 'react-router-dom'
import FoodPage from './components/Food/FoodPage'
import FoodCards from './containers/FoodCards';
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  componentDidMount(){
    this.props.setFoods()
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <h1>
            Food Nutrient Calculator
          </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Link to={"/foods"}>Foods</Link>
        <Link to={"/uploads"}>Predict my Meal</Link>
        </header>
        <Switch>
          <Route path="/foods/:id" component={FoodPage}/>
          <Route path="/foods" component={FoodCards} />
          <Route path="/uploads" component={UsersContainer}/>
          </Switch>
        
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
