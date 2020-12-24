import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedMeal, unsetMeal } from '../../redux/actionCreator'
import { Card } from 'react-bootstrap'
class MealPage extends Component {

componentDidMount(){
    const id = this.props.match.params.id
    
    this.props.setSelectedMeal(id)
}

componentWillUnmount(){
    this.props.unsetMeal()
  }


render(){
    console.log(this.props)    
    const { name, id, user_id, history } = this.props
    return(
        <>
        <div className="card" class="card" style={{color: "red"}}>
            <p id={id}>{name}</p>
            <p>User: {user_id}</p>
            <button onClick={ history.goBack }>Go back!</button>
        </div>
        </>
        )
    }

}

const mapStateToProps = (state) => ({...state.meals.selectedMeal})

export default connect( mapStateToProps, { setSelectedMeal, unsetMeal } )(MealPage)
