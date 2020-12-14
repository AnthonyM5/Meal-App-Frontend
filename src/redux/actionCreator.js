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