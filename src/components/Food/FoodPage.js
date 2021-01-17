import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router';
import { setSelectedFood, unsetFood, addToMeal} from '../../redux/actionCreator'
import ListGroup from 'react-bootstrap/ListGroup'
import cuid from 'cuid'
import Spinner from 'react-bootstrap/Spinner'

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
    // console.log(this.props.location)
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
    
    const { name, calories, history, nutrientHash, location} = this.props 

    console.log(this.props)
    return(
        <>
        <h1>{name}</h1>
        <h3>Serving Size: 100G
        <br></br>Calories: {calories}</h3>
        <div className="card">
        <button onClick={ history.goBack }>Go back!</button>
            {this.renderRedirect()}
            <h4>Nutrients: </h4>
            
            <ListGroup as="ul" variant="flush">
            {nutrientHash ? nutrientHash.map(nutrient => <ListGroup.Item as="li" key={cuid()}>{nutrient.nutrientName}: {nutrient.value} {nutrient.unitName}</ListGroup.Item>) : <Spinner animation="border" size="xl" variant="primary" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>}
            </ListGroup>
            { location.state.mealId ? <button onClick={this.handleClick}>Add To Meal</button> : null }
        </div>
        </>
        )
    }
    
}

const mapStateToProps = (state) => ({...state.foods.selectedFood})

export default connect( mapStateToProps, { setSelectedFood, unsetFood, addToMeal } )(FoodPage)
