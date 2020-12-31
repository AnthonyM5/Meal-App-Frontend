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
    
    const { name, history, nutrients, username } = this.props
    const id = this.props.match.params.id
    console.log(id)

    return(
        <>
        <div className="card" style={{color: "red"}}>
            <h1>User: {username}</h1>
            <h3 id={id}>{name}</h3>
            {/* {nutrients ? nutrients.map(ingredient => console.log(this.props.filter(ingredient.food_id))) : null} */}
            { nutrients ? nutrients.map(nutrient => 
                
            <p key={cuid()}> <Link to={{ 
                pathname: '/foods/' + nutrient.id,
                state: {id}
            }}>{nutrient.name}</Link></p> ) : null }
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

export default connect( mapStateToProps, { setSelectedMeal, unsetMeal, setSelectedIngredients } )(MealPage)
