import React from 'react'
import { connect } from 'react-redux'
import { toggleSignup, handleLogin} from '../redux/actionCreator'

const Login = (props) => {
    const { signup, toggleSignup, form } = props
    const { username, password, passwordConfirmation } = form

    const onSubmit = (e) => {
      e.preventDefault()
      if (signup){
        if (password == passwordConfirmation){
          console.log("logged in")
        } else {
          alert("Those passwords don't match!")
        }
      } else {
        console.log({username: username, password: password})
      }
    }
    console.log(props.form)
    return(
      
      <>
        <h3>{signup ? "Sign up!" : "Login!"} </h3>
        <form onSubmit={onsubmit}> 
          <label>
            Username:
            <input type="text" name="username"  />
          </label><br/>
          <label>
            Password:
            <input type="password" name="password"  />
          </label><br/>
          {signup &&
            <>
              <label>
                Password Confirmation:
                <input type="password" name="passwordConfirmation"  />
              </label>
              <input type="submit" value="Submit" />
            </>
          }
        </form>
        <br/>
        <br/>
        <button onClick={toggleSignup}>Or... {signup ? "Login!" : "Sign up!"}</button>
      </>
    )
  }

  const mapStateToProps = (state) => ({
    signup: state.users.signup,
    form: state.users.loginForm
  })

  export default connect(mapStateToProps, { toggleSignup, handleLogin } )(Login)