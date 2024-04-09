import React from 'react';
//import { useState } from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
//import axios from "axios";


const Survey = () => {

  const groupMembers = ["Person1", "Person2", "Person3", "Person4"]

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Survey</title>
      <ul>{groupMembers.map(member => (
        <div class="container2">
        <label>
          <big>How did {member} perfrom? </big>
        </label>
        <label>
          <input label="1" type="radio" name={member} />
          1 Did not contribute
        </label>
        <label>
          <input label="2" type="radio" name={member} />
          2
        </label>
        <label>
          <input label="3" type="radio" name={member} />
          3
        </label>
        <label>
          <input label="4" type="radio" name={member} />
          4
        </label>
        <label>
          <input label="5" type="radio" name={member} defaultChecked />
          5 Did what was expected
        </label>
        <label>
          <input label="6" type="radio" name={member} />
          6
        </label>
        <label>
          <input label="7" type="radio" name={member} />
          7
        </label>
        <label>
          <input label="8" type="radio" name={member} />
          8
        </label>
        <label>
          <input label="9" type="radio" name={member} />
          9
        </label>
        <label>
          <input label="10" type="radio" name={member} />
          10 Above and beyond
        </label>
        </div>
        ))}
      </ul>
      <Link to="/Home">
        <button>Submit</button>
      </Link>
    </>
  );
};

export default Survey;
