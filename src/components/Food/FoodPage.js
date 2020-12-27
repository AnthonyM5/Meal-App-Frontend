import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedFood, unsetFood } from '../../redux/actionCreator'

class FoodPage extends Component {

componentDidMount(){
    const id = this.props.match.params.id
    this.props.setSelectedFood(id)
}

componentWillUnmount(){
    this.props.unsetFood()
  }


render(){
    const { name, id, calories, history, location } = this.props
    console.log(location.state.mealId)
    return(
        <div className="card">
            <p id={id}>{name}</p>
            <p>Calories: {calories}</p>
            <button onClick={ history.goBack }>Go back!</button>
        </div>
        )
    }

}

const mapStateToProps = (state) => ({...state.foods.selectedFood})

export default connect( mapStateToProps, { setSelectedFood, unsetFood } )(FoodPage)
