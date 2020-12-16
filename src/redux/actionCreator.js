const API = "http://localhost:3001"

export const setFoods = () => {
  return dispatch => {
    fetch(API + "/foods")
    .then(res => res.json())
    .then(foods => dispatch({
      type: "SET_FOODS",
      payload: foods
    })
  )}
}

export const setSelectedFood = (id) => {
  return dispatch => {
    fetch(API + "/foods/" + id)
    .then(res => res.json())
    .then(food => dispatch({
      type: "SET_SELECTED_FOOD",
      payload: food
    }))
  }
}

export const unsetFood = () => ({type: "UNSET_FOOD"})
