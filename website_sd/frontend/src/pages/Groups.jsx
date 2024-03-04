import React from 'react';

const Groups = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>View Groups - Peer Review Dashboard</title>
      {/* Include necessary stylesheets */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="css/dashboardStyles.css" />
      <div className="grid-container">
        {/* Header */}
        <header className="header">
          <div className="menu-icon" onClick={openSidebar}>
            <span className="material-icons-outlined">menu</span>
          </div>
          <div className="header-left">
            <span className="material-icons-outlined">search</span>
          </div>
          <div className="header-right">
            {/* error temporary */}
            <a href="error.html">
              <span className="material-icons-outlined">notifications</span>
            </a>
            <a href="error.html">
              <span className="material-icons-outlined">email</span>
            </a>
            <a href="error.html">
              <span className="material-icons-outlined">account_circle</span>
            </a>
            <a href="index.html" title="logout">
              <span className="material-icons-outlined">logout</span>
            </a>
          </div>
        </header>
        {/* End Header */}
        {/* Sidebar */}
        <aside id="sidebar">
          {/* Include the same sidebar content from the dashboard */}
          <div className="sidebar-title">
            <div className="sidebar-brand">
              <span className="material-icons-outlined">rate_review</span>Peer Review
            </div>
            <span className="material-icons-outlined" onClick={closeSidebar}>
              close
            </span>
          </div>
          <ul className="sidebar-list">
            {/* Include the same sidebar items as in the dashboard */}
            {/* View Dashboard */}
            <li className="sidebar-list-item">
              <span className="material-icons-outlined">dashboard</span>
              <a href="dashboardIndex.html">Dashboard</a>
            </li>
            {/* View Groups */}
            <li className="sidebar-list-item">
              <a href="groups.html">
                {/* Updated link to groups.html */}
                <span className="material-icons-outlined">groups</span>
                Groups
              </a>
            </li>
            {/* Request Invite */}
            <li className="sidebar-list-item">
              <span className="material-icons-outlined">contact_mail</span>
              <a href="error.html" />
              Request Invite
            </li>
            {/* Add Groups */}
            <li className="sidebar-list-item">
              <span className="material-icons-outlined">add_circle</span>
              Create Group
            </li>
            {/* Reports */}
            <li className="sidebar-list-item">
              <a href="reportIndex.html" title="View your Reports">
                <span className="material-icons-outlined">poll</span> Reports
              </a>
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
              <button className="invite-button">Invite Members</button>
              <button className="leave-button">Leave Group</button>
            </div>
            <div className="card inner">
              <h3>Group 2</h3>
              <span className="material-icons-outlined">groups</span>
              <p>Number of Members: 6</p>
              <p>Date Created: January 6, 2024</p>
              <button className="invite-button">Invite Members</button>
              <button className="leave-button">Leave Group</button>
            </div>
            <div className="card inner" onClick={viewGroups}>
              <h3>Group 3</h3>
              <span className="material-icons-outlined">groups</span>
              <p>Number of Members: 4</p>
              <p>Date Created: January 10, 2024</p>
              <button className="invite-button">Invite Members</button>
              <button className="leave-button">Leave Group</button>
            </div>
            <div className="card inner">
              <h3>Group 4</h3>
              <span className="material-icons-outlined">groups</span>
              <p>Number of Members: 3</p>
              <p>Date Created: February 1, 2024</p>
              <button className="invite-button">Invite Members</button>
              <button className="leave-button">Leave Group</button>
            </div>
          </div>
        </main>
        {/* End Main */}
      </div>
      {/* Popup for inviting members */}
      <div id="invitePopup" className="popup">
        <div className="popup-content">
          <span className="close" onClick={closePopup}>
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
          <span className="close" onClick={closeLeavePopup}>
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
