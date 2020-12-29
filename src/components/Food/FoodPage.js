import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router';
import { setSelectedFood, unsetFood, addToMeal} from '../../redux/actionCreator'
import cuid from 'cuid'


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
    
    console.log(nutrient_hash)

    // nutrient_hash.map(nutrient => {
    //     // console.log(nutrient.nutrientId)
    // })
    
    return(
        <div className="card">
            {this.renderRedirect()}
            
            <p id={id}>{name}</p>
            <p>Calories: {calories}</p>
            {nutrient_hash ? nutrient_hash.map(nutrient => <p key={cuid()}>{nutrient.nutrientName}: {nutrient.value}</p>) : null}
            <button onClick={this.handleClick}>Add To Meal</button>
            <button onClick={ history.goBack }>Go back!</button>
        </div>
        )
    }
    
}

const mapStateToProps = (state) => ({...state.foods.selectedFood})

export default connect( mapStateToProps, { setSelectedFood, unsetFood, addToMeal } )(FoodPage)
