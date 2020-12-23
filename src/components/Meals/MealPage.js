import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedMeal, unsetMeal } from '../../redux/actionCreator'

class FoodPage extends Component {

componentDidMount(){
    const id = this.props.match.params.id
    // console.log(id)
    this.props.setSelectedMeal(id)
}

componentWillUnmount(){
    this.props.unsetMeal()
  }


render(){
    
    return(
        <>
        </>
        )
    }

}

const mapStateToProps = (state) => ({...state.foods.selectedFood})

export default connect( mapStateToProps, { setSelectedMeal, unsetMeal } )(FoodPage)
