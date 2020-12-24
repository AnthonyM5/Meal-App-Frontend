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
import {Navbar} from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  componentDidMount(){
    localStorage && this.props.autoLogin()
    this.props.setFoods()
    // this.props.setMeals()
  }

  render(){
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>  
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
