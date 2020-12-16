// import React, { Component } from 'react'
import { connect } from 'react-redux'
import FoodCard from '../components/FoodCard'


const FoodCards = (props) => {
  // componentDidUpdate (){
  //   this.props.setFoods()
  // }
    // console.log(this.props.foods)
     
    // for (const [name, value] of Object.entries(props.foods)) {
    //   console.log(`${JSON.stringify(name)}: ${JSON.stringify(value)}`)
    // }
    return (
      <div className="card">
        <h1>Food Card</h1>
        {/* {props.foods.map(food => <FoodCard key={food.id}/> )} */}
      </div>
    )

}

const msp = (state) => ({
  foods: state.foods
})
  
  
  export default connect(msp)(FoodCards)