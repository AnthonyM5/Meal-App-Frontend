import React from 'react'
import { connect } from 'react-redux'
// import { compose } from 'redux'
import FoodCard from '../components/Food/FoodCard'
// import { Link } from 'react-router-dom'



const FoodCards = (props) => {
  // componentDidUpdate (){
  //   console.log(this.state.foods)
  // }
    // console.log(this.props.foods)
     
    // for (const [name, value] of Object.entries(state.foods)) {
    //   console.log(`${JSON.stringify(name)}:`)
    // }
    // console.log(props.foods)
    return (
      <div className="cards">
        {props.foods.map(food => <FoodCard key={food.id} {...food}/> )}
      </div>
    )

}

const msp = (state) => ({
  foods: state.foods.foods
})
  
  
  export default connect(msp)(FoodCards)