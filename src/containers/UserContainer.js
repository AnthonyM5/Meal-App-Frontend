import React, { Component } from 'react';
import { connect } from 'react-redux';


class UserContainer extends Component {

    render() {
      return (
        <div>
          Something goes here
        </div>
      )
    }
  }
  
  
  const mapStateToProps = (state) => ({ meals: state.meals})
  
  const mapDispatchToProps = (dispatch) => {
    return{
        addMeal: (meal) => dispatch({ type: 'ADD_MEAL', meal}),
        deleteMeal: (id) => dispatch({ type: 'DELETE_MEAL', id})
      }
  }

  
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);