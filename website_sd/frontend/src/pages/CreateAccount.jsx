import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const CreateAccount = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Create an Account</title>
      <link rel="stylesheet" href="website_sd\frontend\public\css\CreateAccount.css" />
      <div className="container">
        <h1>Create an Account</h1>
        <form action="/" method="post">
          <label htmlFor="firstname">First Name:</label>
          <input type="text" id="firstname" name="firstname" required="" />
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" id="lastname" name="lastname" required="" />
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required="" />
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" name="password" required="" />
          {/* Replace onclick with Link */}
          <Link to="/dashboardIndex">
            <button>Create an Account</button>
          </Link>
        </form>
        <p>
          Have an account? <Link to="/loginpage">Login</Link> {/* Use Link for Login */}
        </p>
      </div>
    </>
  );
};

export default CreateAccount;
