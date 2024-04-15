import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { toast } from 'react-toastify';
const Groups = () => {
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
    navigate("/signup");
  };
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Peer Review Dashboard</title>
      {/* Montserrat Font */}
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet" />
      {/* Material Icons */}
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      <div className="grid-container">
        {/* Header */}
        <header className="header">
          <div className="menu-icon">
            {" "}
            <span className="material-icons-outlined">menu</span>
          </div>
          <div className="header-left"></div>
          <div className="header-right">
            
            <button onClick={Logout} title="Logout of your account">
              <span className="material-icons-outlined">logout</span>
            </button>
          </div>
        </header>
        {/* End Header */}

        {/* Sidebar */}
        <aside id="sidebar">
          <div class="sidebar-title">
            <div class="sidebar-brand">
              <span class="material-icons-outlined">rate_review</span>Peer
              Review
            </div>
            <span class="material-icons-outlined">close</span>
          </div>
          <ul class="sidebar-list">
            <li class="sidebar-list-item">
              <span class="material-icons-outlined">dashboard</span>
              <a href="/Dashboard">Dashboard</a>
            </li>
            <li class="sidebar-list-item">
              <span class="material-icons-outlined">groups</span>
              <a href="/Groups">Groups</a>
            </li>


 
          
          </ul>
        </aside>
        {/* End Sidebar */}
        {/* Main */}
        <main className="main-container">
          <div className="main-title">
            <h2>View Groups</h2>
          </div>
          <div className="main-cards">
            <div className="card inner">
              <h3>Group 1</h3>
              <span className="material-icons-outlined">groups</span>
              <p>Number of Members: 5</p>
              <p>Date Created: Decemebr 10, 2023</p>
              <div className='button-container'>
              <button className="invite-button">Invite Members</button>
              <Link to="/Reports" title="Rate your Peers">
              <button className="view-button">View Group</button>
              </Link>
              <button className="leave-button">Leave Group</button>
              </div>
            </div>
            <div className="card inner">
              <h3>Group 2</h3>
              <span className="material-icons-outlined">groups</span>
              <p>Number of Members: 6</p>
              <p>Date Created: January 6, 2024</p>
              <div className='button-container'>
              <button className="invite-button">Invite Members</button>
              <Link to="/Reports" title="Rate your Peers">
              <button className="view-button">View Group</button>
              </Link>
              <button className="leave-button">Leave Group</button>
              </div>
            </div>
            <div className="card inner" > {/*onClick={viewGroups}*/}
              <h3>Group 3</h3>
              <span className="material-icons-outlined">groups</span>
              <p>Number of Members: 4</p>
              <p>Date Created: January 10, 2024</p>
              <div className='button-container'>
              <button className="invite-button">Invite Members</button>
              <Link to="/Reports" title="Rate your Peers">
              <button className="view-button">View Group</button>
              </Link>
              <button className="leave-button">Leave Group</button>
              </div>
            </div>
            <div className="card inner">
              <h3>Group 4</h3>
              <span className="material-icons-outlined">groups</span>
              <p>Number of Members: 3</p>
              <p>Date Created: February 1, 2024</p>
              <div className='button-container'>
              <button className="invite-button">Invite Members</button>
              <Link to="/Reports" title="Rate your Peers">
              <button className="view-button">View Group</button>
              </Link>
              <button className="leave-button">Leave Group</button>
              </div>
            </div>
          </div>
        </main>
        {/* End Main */}
      </div>
      {/* Popup for inviting members */}
      <div id="invitePopup" className="popup">
        <div className="popup-content">
          <span className="close" > {/*onClick={closePopup}*/}
            ×
          </span>
          {/* Invite members form goes here */}
          <h3>Invite Members to Group</h3>
          <form>
            {/* Add form fields for inviting members */}
            <input type="email" placeholder="Enter email" />
            <button type="submit">Send Invitation</button>
          </form>
        </div>
      </div>
      {/* Popup for leaving group */}
      <div id="leavePopup" className="popup">
        <div className="popup-content">
          <span className="close" > {/*onClick={closeLeavePopup}*/}
            ×
          </span>
          <h3>Leave Group</h3>
          <p>Are you sure you want to leave this group?</p>
          <button className="confirm-leave-button">Leave</button>
        </div>
      </div>
    </>
  );
};

export default Groups;