import React from 'react'
import { connect } from 'react-redux'
import FoodCard from '../components/FoodCard'


const FoodCards = (props) => {
    console.log(props.foods)
    return(
    <div className="cards">
      
    </div>
    )
  }
  
  const msp = (state) => ({
    foods: state.foods.foods
  })
  
  export default connect(msp)(FoodCards)