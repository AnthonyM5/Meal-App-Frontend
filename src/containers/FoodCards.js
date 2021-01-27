import { React, useEffect} from 'react'
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


    // const [toggle, setToggle] = useState(false);
    // moved the filter/toggle state to redux

    // console.log(props)

    // setToggle({toggle: !toggle})

    useEffect(() => {
      return () => props.unsetForms()
    }, [])

  
    
    const searchedFoods = props.foods.filter(food => {
      return food.name.toLowerCase().includes(props.search.toLowerCase())
    })
    const { history, location } = props


 
    const filteredFoods = () => {

      return props.calories ? searchedFoods.map( food => food).sort(function(a,b) {return a.calories - b.calories}) : searchedFoods
    
    }
      
    
    


    // console.log(filteredFoods)

    

  
    

        
    return (
      searchedFoods.length > 0 ? 
      <>
      <Filter />
      <button onClick={history.goBack}>Go Back!</button>
      { location.state ? filteredFoods().map(food => <FoodCard key={food.id} {...food} mealId={location.state.id}/>) : filteredFoods().map(food => <FoodCard key={food.id} {...food}/>) }
      </> : <> <h1>"Not Found"</h1> <button onClick={props.unsetForms}>Search Again</button></>
    ) 
}

const msp = (state) => ({
  foods: state.foods.foods,
  ...state.foods.filtersForm
})


  
  
  export default connect(msp, { unsetForms })(FoodCards)