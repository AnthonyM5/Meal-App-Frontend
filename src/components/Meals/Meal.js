import React, { Component } from 'react';

class Meal extends Component {


    render() {
      const { meal } = this.props;
      console.log(this.props)
      return (
        <div>
          <li>
            <p>{meal.text}</p>
            <p>{meal.id}</p> 
            <button onClick={(e) => this.props.deleteMeal(this.props.meal.id)}> X </button>
          </li>
        </div>
      );
    }
  };
  
  export default Meal;