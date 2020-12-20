import cuid from 'cuid'
import { combineReducers } from 'redux'
import foodsReducer from './foodsReducer'
import userReducer from './usersReducer'

const rootReducer = combineReducers({
  meals: manageMeals,
  foods: foodsReducer,
  users: userReducer
})
export default rootReducer

function manageMeals (state = [], action) {

  switch (action.type) {
    
    case 'ADD_MEAL':
      let meal = {
        id: cuid(),
        text: action.payload.meal
      }
      console.log(action)
      return [...state, meal]

    case 'DELETE_MEAL':
      return state.filter(meal => meal.id !== action.id)

    default:
      return state
  }
}

// function manageReviews(state = [], action) {
//   switch (action.type) {
//     case 'ADD_REVIEW':
//       let review = {...action.review, id: cuid()}
//       return [...state, review]

//     case 'DELETE_REVIEW':
//       return state.filter(review => review.id !== action.id)
//     default:
//       return state
//   }



