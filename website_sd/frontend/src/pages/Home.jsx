import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import trend1 from './trend1.png';
import trend2 from './trend2.png';
import trend3 from './trend3.png';

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      } else {
        setIsLoggedIn(true);
        const { data } = await axios.post(
          "http://localhost:4000/",
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        setUsername(user);
        return status
          ? toast(`Hello ${user}`, {
              position: "top-right",
            })
          : (removeCookie("token"), navigate("/login"));
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/login");
  };
  const handleDashboardClick = () => { navigate("/dashboard"); };

  return (
    <div id="root">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Peer Review</title>
      <div className="grid-container">
            <header className="header">
        {isLoggedIn ? (
          <>
            <div className="left-buttons">
              <button onClick={handleDashboardClick}>Dashboard</button>
            </div>
            <div className="right-buttons">
              <button onClick={Logout}>LOGOUT</button>
            </div>
          </>
        ) : (<></>
            )}
      </header>
        <main className="main-container">
          {isLoggedIn ? (
            <div className="home_page">
              <h4>Welcome <span>{username}</span></h4>
              <center>
              <h1 style={{ fontSize: 90 }}>Peer Review</h1>
              <h3 style={{ fontSize: 50 }}>Enhanced Analysis</h3>
              <img
                src={trend1}
                width={300}
                height={300}
                style={{ backgroundColor: "darkblue" }}
                alt="Trend 1"
              />
              <img
                src={trend2}
                width={300}
                height={300}
                style={{ backgroundColor: "darkblue" }}
                alt="Trend 2"
              />
              <img
                src={trend3}
                width={300}
                height={300}
                style={{ backgroundColor: "darkblue" }}
                alt="Trend 3"
              />
            </center>
            </div>
          ) : (
            <center>
              <h1 style={{ fontSize: 90 }}>Peer Review</h1>
              <h3 style={{ fontSize: 50 }}>Enhanced Analysis</h3>
              <img
                src={trend1}
                width={300}
                height={300}
                style={{ backgroundColor: "darkblue" }}
                alt="Trend 1"
              />
              <img
                src={trend2}
                width={300}
                height={300}
                style={{ backgroundColor: "darkblue" }}
                alt="Trend 2"
              />
              <img
                src={trend3}
                width={300}
                height={300}
                style={{ backgroundColor: "darkblue" }}
                alt="Trend 3"
              />
            </center>
          )}
        </main>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;