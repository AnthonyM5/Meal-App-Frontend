import React, { Component } from 'react';
import FileReader from './components/FileReader';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { setFoods, setMeals, autoLogin, logout } from './redux/actionCreator' 
import Login from './components/Login'
import FoodPage from './components/Food/FoodPage'
import FoodCards from './containers/FoodCards';
import MealsPage from './components/Meals/MealPage';
import Meal from './components/Meals/Meal';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserContainer from './containers/UserContainer';
import { compose } from 'redux';

class App extends Component {

  componentDidMount(){
    localStorage && this.props.autoLogin()
    this.props.setFoods()
    // this.props.setMeals()
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Food Nutrient Calculator</h1>
        {this.props.users.id ?  <>
        <Link to={"/foods"}>Foods</Link>
        <Link to={"/meals"}>Meals</Link>
        <Link to={"/uploads"}>Guess your recipe</Link>
        <br>
        </br>
        <p><button onClick={this.props.logout}>Logout!</button>  </p>
        </>: <Login />}
        
        </header>
        <Switch>
          <Route path="/meals/:id" component={MealsPage} />
          <Route path="/meals" component={UserContainer} />
          <Route path="/foods/:id" component={FoodPage}/>
          <Route path="/foods" component={FoodCards} />
          <Route path="/uploads" component={FileReader}/>
        </Switch>
        
        
        
      </div>
    );
  }
  }
 

  const mapStateToProps = (state) => ({ foods: state.foods, users: state.users, meals: state.meals})
  
  // const mapDispatchToProps = (dispatch) => {
  //   return{
  //       deleteReview: (id) => dispatch({ type: 'DELETE_REVIEW', id}),
  //       addMeal: (name) => dispatch({type: "ADD_MEAL", name}),
  //       setFoods: (foods) => dispatch({type: "SET_FOODS", foods}),
  //       addReview: (review) => dispatch({ type: 'ADD_REVIEW', review})
  //     }
  // }

  
  
  export default connect(mapStateToProps, { setFoods, setMeals, autoLogin, logout })(App);
