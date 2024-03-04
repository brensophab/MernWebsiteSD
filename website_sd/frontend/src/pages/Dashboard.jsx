import React from 'react';

const Dashboard = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Peer Review Dashboard</title>
      {/* Montserrat Font */}
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet" />
      {/* Material Icons */}
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
      {/* Custom CSS */}
      <link rel="stylesheet" href="css/dashboardStyles.css" />
      <div className="grid-container">
        {/* Header */}
        <header className="header">
          <div className="menu-icon" >{/**onClick={openSidebar} */}
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
          <div className="sidebar-title">
            <div className="sidebar-brand">
              <span className="material-icons-outlined">rate_review</span>Peer Review
            </div>
            <span className="material-icons-outlined" >{/**onClick={closeSidebar} */}
              close
            </span>
          </div>
          <ul className="sidebar-list">
            {/* View Dashboard */}
            <li className="sidebar-list-item">
              <a href="dashboardIndex.html">
                <span className="material-icons-outlined">dashboard</span>
                Dashboard
              </a>
            </li>
            {/* View Groups */}
            <li className="sidebar-list-item">
              <span className="material-icons-outlined">groups</span>
              <a href="groups.html">Groups</a>
            </li>
            {/* Request Invite */}
            <li className="sidebar-list-item">
              <span className="material-icons-outlined">contact_mail</span>
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
            <h2>Dashboard</h2>
          </div>
          <div className="main-cards">
            <div className="card inner">
              <h3>Request Invite</h3>
              <span className="material-icons-outlined">contact_mail</span>
            </div>
            <div className="card inner">
              <h3>Create Group</h3>
              <span className="material-icons-outlined">add_circle</span>
            </div>
            <div className="card inner">
              <h3>View Groups</h3>
              <span className="material-icons-outlined">groups</span>
            </div>
            <div className="card inner">
              <h3>View Reports</h3>
              <span className="material-icons-outlined">analytics</span>
            </div>
          </div>
          <div className="charts">
            <div className="charts-card">
              <h2 className="chart-title">Peer Review Ratings</h2>
              <div id="area-chart" />
            </div>
            <div className="charts-card">
              <h2 className="chart-title">Request Invite</h2>
              {/* Request Form */}
              <div className="request-form">
                <input type="text" className="form-input" placeholder="Enter requested group name" id="groupNameInput" />
                <button className="form-button" >{/**onClick={requestInvite} */}
                  Request
                </button>
              </div>
            </div>
          </div>
        </main>
        {/* End Main */}
      </div>
      {/* Scripts */}
      {/* Apex Charts */}
      {/* JS */}
    </>
  );
};

export default Dashboard;
