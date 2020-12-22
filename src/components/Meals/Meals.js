import React from 'react';
import { connect } from 'react-redux'
import Meal from '../Meals/Meal'

const Meals = (props) => {
    console.log(props)

    const { history } = props
    return(
      <>
      
      <div className="cards">
        {props.meals.map(meal => <Meal key={meal.id} {...meal}/> )}
        
      </div>
      </>
    );
  }


const msp = (state) => ({
  meals: state.meals.meals
})

export default connect(msp)(Meals);
