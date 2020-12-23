import { combineReducers } from 'redux'
import foodsReducer from './foodsReducer'
import userReducer from './usersReducer'
import manageMeals from './mealsReducer'

const rootReducer = combineReducers({
  meals: manageMeals,
  foods: foodsReducer,
  users: userReducer
})
export default rootReducer



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



