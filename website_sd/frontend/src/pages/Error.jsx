import React from 'react';

const Error = () => {
  return (
    <div className="error">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="css/reportStyles.css" />
      <title>Error</title>
      <h1>Error</h1>
      <p>
        Sorry, an error occurred or the link you clicked on does not exist.{" "}
        <a href="index.html">Click here</a> to sign out.
      </p>
    </div>
  );
};

export default Error;
