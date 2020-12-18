import React from 'react'
import { connect } from 'react-redux'
import { toggleSignup } from '../redux/actionCreator'

const Login = (props) => {
    const { signup, toggleSignup, form } = props
    const { username, password, passwordConfirmation } = form


    return(
      <>
        <h3>{signup ? "Sign up!" : "Login!"} </h3>
        <form>
          <label>
            Username:
            <input type="text" name="username" value={username} />
          </label><br/>
          <label>
            Password:
            <input type="password" name="password" value={password}/>
          </label><br/>
          {signup &&
            <>
              <label>
                Password Confirmation:
                <input type="password" name="passwordConfirmation" value={passwordConfirmation} />
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

  export default connect(mapStateToProps, { toggleSignup })(Login)