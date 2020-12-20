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
export const handleLogin = (e) => ({type: "LOGIN_FORM", payload: {name: e.target.name, value: e.target.value}})
export const toggleSignup = () => ({type: "TOGGLE_SIGNUP"})

export const signUpForm = (data) => {
  return dispatch => {
    fetch(API + "/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(res => {
      localStorage.token = res.token
      dispatch({
      type: "SET_USER",
      payload: {user: res.user}
    })}
    )
    
  }
}

export const loginForm = (data) => {
  return dispatch => {
    fetch(API + "/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(res => {
      localStorage.token = res.token
      dispatch({
        
        type: "SET_USER",
        payload: {user: res.user}
      })
    })
  
    
  }
}

export const autoLogin = () => {
  
  return dispatch => {
    console.log(localStorage.token)
    fetch(API + "/autologin", {
      method: 'POST', 
      headers: {
        'Authorization': localStorage.token,
      },
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .then(res => {
      dispatch({
      type: "SET_USER",
      payload: {user: res.user}
    })
  })
  }
}



export const unsetFood = () => ({type: "UNSET_FOOD"})

