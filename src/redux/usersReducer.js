const loginForm ={
  username: "",
  password: "",
  passwordConfirmation:""
}

const initialState = {
    id: "",
    username: "",
    signup: false,
    loginForm: loginForm
  }
  
  const userReducer = (state=initialState, action) => {
    switch (action.type){
      case "TOGGLE_SIGNUP":
        return {...state, signup: !state.signup}
      case "LOGIN_FORM":
        // console.log(action.payload)
        return {...state, loginForm: {
          ...state.loginForm, [action.payload.name]: action.payload.value
        }}
        
      case "LOGOUT":
        return {...state, username: "", id: ""}
      default:
        return {...state}
    }
  }
  
  export default userReducer