const loginForm ={
  username: "",
  password: "",
  passwordConfirmation:""
}

const initialState = {
    id: "",
    username: "",
    signup: false,
    form: loginForm
  }
  
  const userReducer = (state=initialState, action) => {
    switch (action.type){
      case "TOGGLE_SIGNUP":
        return {...state, signup: !state.signup}
      case "LOGIN_FORM":
        return { ...state, form: {
          ...state.form,
          [action.payload.name]: action.payload.value
        }}
      case "SET_USER":
        // console.log(action.payload) - Checking to see if User data is passed properly
        return {...state, ...action.payload.user}
      case "LOGOUT":
        console.log("logged out")
        return {...state, username: "", id: ""}
      default:
        return {...state}
    }
  }
  
  export default userReducer