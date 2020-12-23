import cuid from 'cuid'

const nullObj = {
    id: "",
    name: ""
  }
  
const initialState = {
meals: [],
selectedFood: nullObj
}

  
const manageMeals = (state=initialState, action) => {
    switch (action.type) {
      case 'SET_MEALS':
        let meals = action.payload
        return {...state, meals}
      case "UNSET_MEAL":
        return {...state, selectedMeal:nullObj }
      case 'ADD_MEAL':
        let meal = {
          id: cuid(),
          user_id: action.payload.user,
          text: action.payload.meal
        }
        console.log(action)
        return {...state, meal}
  
      case 'DELETE_MEAL':
        return state.filter(meal => meal.id !== action.id)
  
      default:
        return state
    }
  }


  export default manageMeals