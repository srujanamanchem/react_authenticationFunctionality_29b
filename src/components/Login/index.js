import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  onClickLogin = async () => {
    const apiUrl = `https://apis.ccbp.in/login`

    const userDetails = {
      username: `rahul`,
      password: `rahul@2021`,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      const {history} = this.props
      Cookies.set('jwt_token', data.jwt_token, {
        expires: 30,
      })
      history.replace('/')
    }
  }

  render() {
    const accessToken = Cookies.get('jwt_token')
    if (accessToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-route">
        <h1>Please Login</h1>
        <button type="button" onClick={this.onClickLogin}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}
export default Login
