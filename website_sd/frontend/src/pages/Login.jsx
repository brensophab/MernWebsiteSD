import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login</title>
      <link rel="stylesheet" href="website_sd\frontend\public\css\Login.css" />
      <div class="container">
        <h1>Login</h1>
        <form action="/" method="post"> 
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required></input>
          <label for="password">Password:</label>
          <input type="text" id="password" name="password" required></input>
          <Link to="/Dashboard">
            <button>Login</button>
          </Link>
        </form>
        <p>
          Don't have an account? <Link to="/create-account">Create Account</Link> {/* Use Link for Login */}
        </p>
      </div>
    </>
  )
}

export default Login