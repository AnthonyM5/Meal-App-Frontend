import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedMeal, unsetMeal } from '../../redux/actionCreator'
// import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
class MealPage extends Component {

componentDidMount(){
    const id = this.props.match.params.id
    
    this.props.setSelectedMeal(id)
}

componentWillUnmount(){
    this.props.unsetMeal()
  }


render(){
    
    const { name, id, user_id, history, ingredients } = this.props
    // console.log(ingredients)
    return(
        <>
        <div className="card" style={{color: "red"}}>
            <p id={id}>{name}</p>
            <p>User: {user_id}</p>
            { ingredients ? ingredients.map(ingredient => <p key={ingredient.id}>Food ID: {ingredient.food_id}</p>) : null }
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

const mapStateToProps = (state) => ({...state.meals.selectedMeal})

export default connect( mapStateToProps, { setSelectedMeal, unsetMeal } )(MealPage)
