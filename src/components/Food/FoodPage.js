import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router';
import { setSelectedFood, unsetFood, addToMeal} from '../../redux/actionCreator'


class FoodPage extends Component {
    
    state = {
        redirect: false
    }



componentDidMount(){
    const id = this.props.match.params.id
    this.props.setSelectedFood(id)
}

componentWillUnmount(){
    this.props.unsetFood()
  }


renderRedirect = () => {
    // const API = "http://localhost:3000"
    const mealId = this.props.location.state.mealId
    if (this.state.redirect) {
      return <Redirect to={
        { pathname: "/meals/" + mealId
        }
    }/>
    }
  }

handleClick = (e) => {
    e.preventDefault()
    
    this.setState({
        redirect: true
    })   
    const {id, location} = this.props
    // console.log(id, location.state.mealId)
    this.props.addToMeal({id: id, mealId: location.state.mealId})

}




render(){
    
    const { name, id, calories, history, carbs, water, nutrient_hash} = this.props 
    
    // console.log(nutrient_hash)

    for (const key in nutrient_hash) {
        // console.log( `${key}: ${nutrient_hash[key]}`)
        const parse = nutrient_hash[key]
        const nutrient = parse.nutrientName

     
        // switch(nutrient){
        //     case "history":
        //         return null
        //     case "location":
        //         return null
        //     case "match":
        //         return null
        //     case "staticContext":
        //         return null
        //     case "setSelectedFood":
        //         return null
        //     case "unsetFood":
        //         return null
        //     case "addToMeal":
        //         return null
        //     default: 
        //         return <p>{nutrient}</p>
        // }
      
    }

    
    
    return(
        <div className="card">
            {this.renderRedirect()}
            <p id={id}>{name}</p>
            <p>Calories: {calories}</p>
            <p>Carbs: {carbs}</p>
            <p>Water: {water}</p>
            <button onClick={this.handleClick}>Add To Meal</button>
            <button onClick={ history.goBack }>Go back!</button>
        </div>
        )
    }
    
}

const mapStateToProps = (state) => ({...state.foods.selectedFood})

export default connect( mapStateToProps, { setSelectedFood, unsetFood, addToMeal } )(FoodPage)
