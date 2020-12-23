import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInput from '../components/UserInput'
// import FileReader from '../components/FileReader'
import Meals from '../components/Meals/Meals';
import { createMeal, setMeals } from '../redux/actionCreator'
 


class UserContainer extends Component {

  componentDidMount() { 
    console.log(this.props.user)
    this.props.setMeals()
    
  }

    
    render() {
      const { history } = this.props
      return (
        <div>
          <button onClick={history.goBack}>Go Back!</button>
          <UserInput user={this.props.users} createMeal={this.props.createMeal} addMeal={this.props.addMeal}/>
          <Meals meals={this.props.meals} deleteMeal={this.props.deleteMeal} />
          
        </div>
      )
    }
  }
  
  
  const mapStateToProps = (state) => ({ 
    meals: state.meals,
    users: state.users.id,
    username: state.users.username
  })
  
  const mapDispatchToProps = (dispatch) => {
    return{
        addMeal: (meal) => dispatch({ type: 'ADD_MEAL', meal}),
        deleteMeal: (id) => dispatch({ type: 'DELETE_MEAL', id}),
        createMeal: (meal, id) => createMeal(meal, id)
      }
  }

  
  
  export default connect(mapStateToProps, {mapDispatchToProps, setMeals})(UserContainer);

  // export default UserContainer