import React from 'react'
import { connect } from 'react-redux'
import FoodCard from '../components/FoodCard'


const FoodCards = (props) => {
    // console.log(props.foods.map(food => console.log(food.name)))
    return(
    <div className="cards">
      {props.food ? props.foods.map(food => <FoodCard key={food.id} {...food} />) : null }
    </div>
    )
  }
  
  const msp = (state) => ({
    foods: state.foods.foods
  })
  
  export default connect(msp)(FoodCards)