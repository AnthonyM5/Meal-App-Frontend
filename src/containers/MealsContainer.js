import React, { Component } from 'react';
import { connect } from 'react-redux';
// import UserInput from '../components/UserInput'
// import FileReader from '../components/FileReader'
import Meal from '../components/Meals/Meal'
import { createMeal, setMeals } from '../redux/actionCreator'
 


class MealsContainer extends Component {

  // componentDidMount() { 
  //   // console.log(this.props)
  //   // this.props.setMeals()
    
  // }

  // componentWillUnmount() {
  //   this.props.unsetMeals()
  // }
    
    render() {
      console.log(this.props)
      const { history } = this.props
      return (
        this.props.user ? <div className="component">
          {this.props.meals.meals.map(meal => <Meal key={meal.id} {...meal}/> )}
          {/* <UserInput user={this.props.users} createMeal={this.props.createMeal} addMeal={this.props.addMeal}/> */}
          <br></br>
          <button onClick={history.goBack}>Go Back!</button>
        </div> : null 
      )
    }
  }
  
  
  const mapStateToProps = (state) => ({ 
    meals: state.meals,
    user: state.users.id,
    username: state.users.username
  })
  
  const mapDispatchToProps = (dispatch) => {
    return{
        addMeal: (meal) => dispatch({ type: 'ADD_MEAL', meal}),
        unsetMeals: () => dispatch({ type: 'UNSET_MEALS'}),
        createMeal: (meal, id) => createMeal(meal, id)
      }
  }

  
  
  export default connect(mapStateToProps, {mapDispatchToProps, setMeals})(MealsContainer);

  // export default MealsContainer