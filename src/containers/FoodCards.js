import { React, useEffect, useState} from 'react'
// import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux'
// import { compose } from 'redux'
import FoodCard from '../components/Food/FoodCard'
import Filter from '../components/Filters'
import { unsetForms } from '../redux/actionCreator'
// import Spinner from 'react-bootstrap/Spinner'
// import { Link } from 'react-router-dom'






const FoodCards = (props) => {
  // componentDidUpdate (){
  //   console.log(this.state.foods)
  // }
    // console.log(this.props.foods)
     
    // for (const [name, value] of Object.entries(state.foods)) {
    //   console.log(`${JSON.stringify(name)}:`)
    // }


    const [toggle, setToggle] = useState(false);

    console.log(toggle)

    // setToggle({toggle: !toggle})

    useEffect(() => {
      return () => props.unsetForms()
    }, [])

  
    
    const searchedFoods = props.foods.filter(food => {
      return food.name.toLowerCase().includes(props.search.toLowerCase())
    })
    const { history, location } = props


 
    const filteredFoods = searchedFoods.map( food => food).sort(function(a,b) {return a.calories - b.calories})
      
    
    


    // console.log(filteredFoods)

    

  
    

        
    return (
      searchedFoods.length > 0 ? 
      <>
      <Filter />
      <button onClick={history.goBack}>Go Back!</button>
      { props.search ? <div className="cards">
        <button onClick={ () => setToggle(!toggle)}>Sort By Calories</button>
        {
          toggle ? location.state ? filteredFoods.map(food => <FoodCard key={food.id} {...food} mealId={location.state.id}/>) : filteredFoods.map(food => <FoodCard key={food.id} {...food}/>) :
           location.state ? searchedFoods.map(food => <FoodCard key={food.id} {...food} mealId={location.state.id}/>) : searchedFoods.map(food => <FoodCard key={food.id} {...food}/>) 
        }
      </div> : <div className="cards">
        {
          toggle ? location.state ? filteredFoods.map(food => <FoodCard key={food.id} {...food} mealId={location.state.id}/>) : filteredFoods.map(food => <FoodCard key={food.id} {...food}/>) :
           location.state ? searchedFoods.map(food => <FoodCard key={food.id} {...food} mealId={location.state.id}/>) : searchedFoods.map(food => <FoodCard key={food.id} {...food}/>) 
        }
      </div> }
      </> : <> <h1>"Not Found"</h1> <button onClick={props.unsetForms}>Search Again</button></>
    ) 
}

const msp = (state) => ({
  foods: state.foods.foods,
  ...state.foods.filtersForm
})


  
  
  export default connect(msp, { unsetForms })(FoodCards)