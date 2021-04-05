import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedMeal, setSelectedIngredients, unsetMeal, deleteFromMeal} from '../../redux/actionCreator'
// import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import cuid from 'cuid'



class MealPage extends Component {

componentDidMount(){
    const id = this.props.match.params.id
    
    this.props.setSelectedMeal(id)
    this.props.setSelectedIngredients(id)

}

componentWillUnmount(){
    this.props.unsetMeal()
  }


  handleClick = (e) => {
    e.preventDefault()
    
    this.setState({
        redirect: true
    })   
    const mealId = parseInt(this.props.match.params.id)
    const id = this.props.id
    console.log(this.props)
    this.props.deleteFromMeal({id: id, mealId: mealId})

}

render(){
    
    const { name, history, nutrients, username, calorieCount, ingredients} = this.props
    const id = this.props.match.params.id
    console.log(this.props)
    
    return(
        <>
        {/* {nutrients ? nutrients.forEach(nutrient => console.log(nutrient)) : null} */}
        {/* {nutrients ? nutrients.forEach(nutrient => console.log(Object.values(nutrient).reduce((t, water) => t + water, 0))) : null} */}
        <div className="card">
            <h1>{username}</h1>
            <h3 id={id}>{name}</h3>
            <div className="calories"> <h4>Total Calorie Count: {calorieCount}</h4></div>
            {/* {nutrients ? nutrients.map(ingredient => console.log(this.props.filter(ingredient.food_id))) : null} */}
            { nutrients ? nutrients.map(nutrient => 
            <p key={cuid()}> 
            Food ID: {nutrient.id} Calorie Count: {nutrient.calories}<br>
            </br>
            <Link to={{ 
                pathname: '/foods/' + nutrient.id,
                state: ingredients
            }}>{nutrient.name}</Link> <button onClick={this.handleClick}>Delete From Meal</button> </p>
            ) : null }
             
            <Link to={{ 
                pathname: `/foods`,
                state: {id}
            }}>Add Ingredients</Link>
            
            <button onClick={ history.goBack }>Go back!</button>
        </div>
        
        </>
        )
    }

    

}



const mapStateToProps = (state) => ({
    ...state.meals.selectedMeal,
    ...state.meals.ingredients,
    ...state.users

})

export default connect( mapStateToProps, { setSelectedMeal, unsetMeal, setSelectedIngredients, deleteFromMeal} )(MealPage)
