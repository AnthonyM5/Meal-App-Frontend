import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setFoods } from '../redux/actionCreator' 
import FoodCard from '../components/FoodCard'


class FoodCards extends Component  {
  componentDidMount (){
    this.props.setFoods()
  }

  render(){
    console.log(this.props.foods)
    return (
      <div><p>Food Cards</p></div>
    )
  }


}



const msp = (state) => ({
  foods: state.foods.foods
})
  
  
  export default connect(msp, { setFoods } )(FoodCards)