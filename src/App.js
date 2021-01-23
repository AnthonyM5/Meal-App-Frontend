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
// import Meal from './components/Meals/Meal';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import MealsContainer from './containers/MealsContainer';
// import { compose } from 'redux';
import {Navbar, Nav, Button} from 'react-bootstrap';
// import { Form } from 'react-bootstrap';
// import { FormControl } from 'react-bootstrap';
import UsersContainer from './containers/UsersContainer';



class App extends Component {

  componentDidMount(){
    localStorage && this.props.autoLogin()
    this.props.setFoods()
    
  }

  render(){
    
    const { users } = this.props

    // console.log(this.props)
    return (
      <div className="App">
        { users.id ?     
        <> 
          <Navbar bg="light" expand="lg">
              <Navbar.Brand as={Link} to="/users">Food Nutrient Calculator</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link as={Link} to={{pathname: "/foods"}}>Foods</Nav.Link>
                  <Nav.Link as={Link} to={{pathname: "/meals"}}>Meals</Nav.Link>
                  <Nav.Link as={Link} to={{pathname: "/uploads", state:{useriD: this.props.users.id}}}>Image Guesser</Nav.Link>
                  {/* <NavDropdown title="TensorFlow" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown> */}
                  <Button variant="outline-success" onClick={this.props.logout}>Logout</Button>
                </Nav>
              </Navbar.Collapse>
            </Navbar>    
            <Redirect to={{ pathname: "/users" }}/>
        </> : <>
        <Redirect to={{ pathname: "/" }}/>
        <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" /> <Login /> </header> 
              </>
          }
        <Switch>
          <Route path="/meals/:id" component={MealsPage} />
          <Route path="/meals" component={MealsContainer} />
          <Route path="/users" component={UsersContainer}/>
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
