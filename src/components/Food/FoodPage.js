import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedFood, unsetFood, addToMeal} from '../../redux/actionCreator'

class FoodPage extends Component {

componentDidMount(){
    const id = this.props.match.params.id
    this.props.setSelectedFood(id)
}

componentWillUnmount(){
    this.props.unsetFood()
  }




render(){
    const { name, id, calories, history, location, carbs, water} = this.props
    // console.log(location.state.mealId)
    // console.log(lactose)

    
    // for (const key in this.props) {
    //     // console.log( `${key}: ${this.props[key]}`)
    //     const nutrient = `${this.props[key]}`
    //     // console.log(key)
    //     // switch(key){
    //     //     case "history":
    //     //         return null
    //     //     case "location":
    //     //         return null
    //     //     case "match":
    //     //         return null
    //     //     case "staticContext":
    //     //         return null
    //     //     case "setSelectedFood":
    //     //         return null
    //     //     case "unsetFood":
    //     //         return null
    //     //     case "addToMeal":
    //     //         return null
    //     //     default:
    //     //         return <p>{`${key}: ${this.props[key]}`}</p> 
    //     // }
    // }

    



    
    return(
        <div className="card">
            <p id={id}>{name}</p>
            <p>Calories: {calories}</p>
            <p>Carbs: {carbs}</p>
            <p>Water: {water}</p>
            <button onClick={this.props.addToMeal({id: id, mealId: location.state.mealId})}> </button>
            <button onClick={ history.goBack }>Go back!</button>
        </div>
        )
    }
    
}

const mapStateToProps = (state) => ({...state.foods.selectedFood})

export default connect( mapStateToProps, { setSelectedFood, unsetFood, addToMeal } )(FoodPage)
