import React from 'react'
import { connect } from 'react-redux'
// import { compose } from 'redux'
import FoodCard from '../components/Food/FoodCard'
import Filter from '../components/Filters'
// import { Link } from 'react-router-dom'



const FoodCards = (props) => {
  // componentDidUpdate (){
  //   console.log(this.state.foods)
  // }
    // console.log(this.props.foods)
     
    // for (const [name, value] of Object.entries(state.foods)) {
    //   console.log(`${JSON.stringify(name)}:`)
    // }
    // console.log(props)
    const searchedFoods = props.foods.filter(food => {
      return food.name.toLowerCase().includes(props.search.toLowerCase())
    })
    const { history } = props
    // console.log(searchedFoods)
    return (
      <>
      <Filter />
      <button onClick={history.goBack}>Go Back!</button>
      <div className="cards">
        {searchedFoods.map(food => <FoodCard key={food.id} {...food}/> )}
      </div>
      </>
    )

}

const msp = (state) => ({
  foods: state.foods.foods,
  ...state.foods.filtersForm
})
  
  
  export default connect(msp)(FoodCards)