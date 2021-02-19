import React, { Component } from 'react';
import UserInput from '../components/UserInput'
import { connect } from 'react-redux';
import { createMeal, setMeals } from '../redux/actionCreator'
// import { Redirect } from 'react-router'

class UserContainer extends Component {



    
    componentDidMount(){
        this.props.setMeals()
        // console.log(this.props)
    }

  


    render(){
        const { username, meals } = this.props
        return (
            <>
            <div className="component">
            <UserInput user={this.props.users} createMeal={this.props.createMeal} mealCount={meals.meals.length} username={username}/>
            </div>
            </>
        )
        
        } 
    }


const mapStateToProps = (state) => ({ 
    meals: state.meals,
    users: state.users.id,
    username: state.users.username
  })


export default connect(mapStateToProps, {createMeal, setMeals})(UserContainer)
