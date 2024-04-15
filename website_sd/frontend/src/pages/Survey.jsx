import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Survey.css'; // Import Survey-specific CSS for styling

const Survey = () => {
  const groupMembers = ["Person1", "Person2", "Person3", "Person4"];

  return (
    <div className="survey-container">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Survey</title>
      <div className="survey-list">
        {groupMembers.map(member => (
          <div key={member} className="survey-item">
            <div className="member-name">
              <big>How did {member} perform?</big>
            </div>
            <div className="radio-buttons">
              {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                <label key={num}>
                  <input type="radio" name={member} value={num} defaultChecked={num === 5} />
                  {num}
                </label>
              ))}
            </div>
            <div className="comments-section">
              <textarea placeholder="Add a comment (optional)" rows="4" cols="50" />
            </div>
          </div>
        ))}
      </ul>
      <Link to="/Reports">
        <button>Submit</button>
      </Link>
    </div>
  );
};

export default Survey;
