import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import FoodCard from '../components/FoodCard'


const FoodCards = (state) => {
  // componentDidUpdate (){
  //   console.log(this.state.foods)
  // }
    // console.log(this.props.foods)
     
    // for (const [name, value] of Object.entries(state.foods)) {
    //   console.log(`${JSON.stringify(name)}:`)
    // }
    console.log(typeof state.foods)
    return (
      <div className="cards">
        <h1>Food Card</h1>
      </div>
    )

}

const msp = (state) => ({
  foods: state.foods.foods
})
  
  
  export default connect(msp)(FoodCards)