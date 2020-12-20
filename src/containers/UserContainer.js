import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInput from '../components/UserInput'
// import FileReader from '../components/FileReader'
import Meals from '../components/Meals/Meals';
import { createMeal } from '../redux/actionCreator'
 


class UserContainer extends Component {
    
    render() {
      console.log(this.props)
      return (
        <div>
          <UserInput createMeal={this.props.createMeal} addMeal={this.props.addMeal}/>
          <Meals meals={this.props.meals} deleteMeal={this.props.deleteMeal} />
          {/* <FileReader/> */}
        </div>
      )
    }
  }
  
  
  const mapStateToProps = (state) => ({ meals: state.meals})
  
  const mapDispatchToProps = (dispatch) => {
    return{
        addMeal: (meal) => dispatch({ type: 'ADD_MEAL', meal}),
        deleteMeal: (id) => dispatch({ type: 'DELETE_MEAL', id}),
        createMeal: (meal) => createMeal(meal)
      }
  }

  
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);

  // export default UserContainer