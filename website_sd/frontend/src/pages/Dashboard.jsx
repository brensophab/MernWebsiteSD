import React from 'react';
import {Link } from 'react-router-dom';
import Chart from "react-apexcharts";
const Dashboard = () => {
  const barChartOptions = {
    chart: { id: "basic-bar" },
    xaxis: {
      categories: [
        "Group 1",
        "Group 2",
        "Group 3",
        "Group 4",
        "Group 5",
      ],labels: { style: { colors: '#ffffff' } }
    },
    yaxis: { labels: { style: { colors: '#ffffff' } } }, // Add this line
    stroke: { colors: ['#ffffff'] },
    series: [{ name: "series-1", data: [4, 3, 4, 5, 2] }],
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
      <div className="grid-container">
        {/* Header */}
        <header className="header">
        <div class="menu-icon" onclick="openSidebar()">
      <span class="material-icons-outlined">menu</span>
    </div>
    <div class="header-left">
      <span class="material-icons-outlined">search</span>
    </div>
        <div className="header-right">
          <Link to="/error">
            <span className="material-icons-outlined">notifications</span>
          </Link>
          <Link to="/error">
            <span className="material-icons-outlined">email</span>
          </Link>
          <Link to="/error">
            <span className="material-icons-outlined">account_circle</span>
          </Link>
          <Link to="/index" title="logout">
            <span className="material-icons-outlined">logout</span>
          </Link>
        </div>
      </header>
        {/* End Header */}

        {/* Sidebar */}
        <aside id="sidebar">
        <div class="sidebar-title">
      <div class="sidebar-brand">
      <span class="material-icons-outlined">rate_review</span>Peer Review
      </div>
      <span class="material-icons-outlined">close</span>
      </div>
        {/* ... */}
        <ul className="sidebar-list">
          {/* View Dashboard */}
          <li className="sidebar-list-item">         
              <span className="material-icons-outlined">dashboard</span>
              <Link to="/Dashboard">
              Dashboard
            </Link>
          </li>
          {/* View Groups */}
          <li className="sidebar-list-item">
            <span className="material-icons-outlined">groups</span>
            <Link to="/Groups">Groups</Link>
          </li>
          
          {/* ... other sidebar items ... */}
          {/* Reports */}
          <li className="sidebar-list-item">
            <Link to="/Reports" title="View your Reports">
              <span className="material-icons-outlined">poll</span> Reports
            </Link>
            
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
              <h2 className="chart-title">Average Ratings</h2>
              <div id="area-chart" />
              <Chart
                  options={barChartOptions}
                  series={barChartOptions.series}
                  type="bar"
                  width="100%"
                />
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