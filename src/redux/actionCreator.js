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



export const setMeals = () => {
  return dispatch => {
    fetch(API + "/meals", {
      headers: {
        'Authorization': localStorage.token,
      },
    })
    
    .then(res => res.json())
    .then(meals => dispatch({
      type: "SET_MEALS",
      payload: meals
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

export const setSelectedMeal = (id) => {
  return dispatch => {
    fetch(API + "/meals/" + id)
    .then(res => res.json())
    .then(meal => dispatch({
      type: "SET_SELECTED_MEAL",
      payload: meal
    }))
  }
}

export const setSelectedIngredients = (id) => {
  return dispatch => {
    fetch(API + "/meals/" + id + "/ingredients")
    .then(res => res.json())
    .then(ingredients => dispatch({
      type: "SET_SELECTED_INGREDIENTS",
      payload: ingredients
    }))
  }
}

export const addToMeal = (data) => {
    console.log(data)
    return dispatch => {
      fetch(API + "/meals/" + data.mealId + "/ingredients", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(res => console.log(res, data))
      } 
    //   fetch(API + "/meals/" + data.mealId + "/ingredients", {
    //     method: "POST",
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': localStorage.token
    //     },
    //     body: JSON.stringify(data),}
    //   )
    //   .then(res => console.log(res))
    // }
}

export const handleLogin = (e) => ({type: "LOGIN_FORM", payload: {name: e.target.name, value: e.target.value}})
export const toggleSignup = () => ({type: "TOGGLE_SIGNUP"})

export const handleSearchForm = (e) => {
  const target = e.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  return ({
    type: "FILTERS_FORM_CHANGE",
    payload: {name: e.target.name, value: value}
  })
}

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

export const createMeal = (data) => {
  console.log(data)
  return dispatch => {
    fetch(API + "/meals", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(res => {
      // console.log(res) 
      // Check to see if data is called properly in payload
      dispatch({
      type: "ADD_MEAL",
      payload: { meal: res.name, user: res.user_id}
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
      console.log(res)
      dispatch({
        
        type: "SET_USER",
        payload: {user: res.user}
      })
    })
  
    
  }
}

export const autoLogin = () => {
  
  return dispatch => {
    fetch(API + "/autologin", {
      method: 'POST', 
      headers: {
        'Authorization': localStorage.token,
      },
    })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: "SET_USER",
        payload: {user: res.user}
      })
  })
  }
}

export const logout = () => {
  return dispatch => {
    localStorage.clear("token")
    dispatch({type: "LOGOUT"})
  }
}


export const unsetFood = () => ({type: "UNSET_FOOD"})

export const unsetMeal = () => ({type: "UNSET_MEAL"})