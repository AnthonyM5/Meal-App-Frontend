const loginForm ={
  username: "",
  password: "",
  passwordConfirmation:""
}

const initialState = {
    id: "",
    username: "",
    signup: false,
    error: null,
    form: loginForm,
    
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
      case "WRONG_USER_OR_PASSWORD":
        return {...state, ...action.payload}
      case "SET_USER":
        // console.log(action.payload) - Checking to see if User data is passed properly
        return {...state, users:{error: null}, ...action.payload.user}
      case "LOGOUT":
        console.log("logged out")
        return {...state, username: "", id: ""}
      case "UNSET_ERROR":
        console.log("start")
        return {...state, users: {...state.users,
        error: null
        }}
      default:
        return {...state}
    }
  }
  
  export default userReducer