import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id="root">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Peer Review</title>
      <div className="grid-container">
        <header className="header">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/create-account">
            <button>Create an Account</button>
          </Link>
        </header>
        <main className="main-container">
          <center>
            <h1 style={{ fontSize: 90 }}>Peer Review</h1>
            <h3 style={{ fontSize: 50 }}>Enhanced Analysis</h3>
            <img
              src="trend1.PNG"
              width={300}
              height={300}
              style={{ backgroundColor: "darkblue" }}
              alt="Trend 1"
            />
            <img
              src="trend2.PNG"
              width={300}
              height={300}
              style={{ backgroundColor: "darkblue" }}
              alt="Trend 2"
            />
            <img
              src="trend3.PNG"
              width={300}
              height={300}
              style={{ backgroundColor: "darkblue" }}
              alt="Trend 3"
            />
          </center>
        </main>
      </div>
    </div>
  );
};

export default Home;
