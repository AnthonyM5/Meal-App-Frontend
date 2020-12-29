import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedMeal, setSelectedIngredients, unsetMeal } from '../../redux/actionCreator'
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


render(){
    
    const { name, id, user_id, history, nutrients, ingredients } = this.props

    console.log(this.props.nutrients)

    return(
        <>
        <div className="card" style={{color: "red"}}>
            <p id={id}>{name}</p>
            <p>User: {user_id}</p>
            {/* {nutrients ? nutrients.map(ingredient => console.log(this.props.filter(ingredient.food_id))) : null} */}
            { nutrients ? nutrients.map(nutrient => 
            <p key={cuid()}> <Link to={{ 
                pathname: '/foods/' + nutrient.id,
                state: {id}
            }}>{nutrient.name}</Link></p>) : null }
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
    ...state.meals.ingredients

})

export default connect( mapStateToProps, { setSelectedMeal, unsetMeal, setSelectedIngredients } )(MealPage)
