import React, { Component } from 'react';
import Meal from '../Meals/Meal'

class Meals extends Component {
  render() {
    return(
      <ul>
        {this.props.meals.map(meal => {
          return <Meal key={meal.id} meal={meal} deleteMeal={this.props.deleteMeal} />
        })}
      </ul>
    );
  }
};

export default Meals;

