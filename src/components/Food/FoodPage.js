import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedFood, unsetFood } from '../../redux/actionCreator'

class FoodPage extends Component {

componentDidMount(){
    const id = this.props.match.params.id
    // console.log(id)
    this.props.setSelectedFood(id)
}

componentWillUnmount(){
    this.props.unsetFood()
  }


render(){
    console.log(this.props)
    return(
        <div>
            
        </div>
        )
    }

}

const mapStateToProps = (state) => ({...state.foods.selectedFood})

export default connect( mapStateToProps, { setSelectedFood, unsetFood } )(FoodPage)
