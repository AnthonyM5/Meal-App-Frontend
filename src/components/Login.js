import React from 'react'
import { connect } from 'react-redux'
import { toggleSignup, handleLogin, signUpForm, loginForm} from '../redux/actionCreator'

const Login = (props) => {
    const { signup, toggleSignup, handleLogin, signUpForm, loginForm, form } = props
    const { username, password, passwordConfirmation } = form

    const onSubmit = (e) => {
      e.preventDefault()
      if (signup){
        if (password == passwordConfirmation){
          signUpForm({username: username, password: password})
        } else {
          alert("Those passwords don't match!")
        }
      } else {
        loginForm({username: username, password: password})
      }
    }

    return(
      
      <>
        <h3>{signup ? "Sign up!" : "Login!"} </h3>
        <form onSubmit={onSubmit}> 
          <label>
            Username:
            <input type="text" name="username"  value={username} onChange={handleLogin} />
          </label><br/>
          <label>
            Password:
            <input type="password" name="password"  value={password} onChange={handleLogin}/>
            <input type="submit" value="Submit" />
          </label><br/>
          {signup &&
            <>
              <label>
                Password Confirmation:
                <input type="password" name="passwordConfirmation" value={passwordConfirmation} onChange={handleLogin}  />
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
    form: state.users.form
  })

  export default connect(mapStateToProps, { toggleSignup, handleLogin, signUpForm, loginForm} )(Login)