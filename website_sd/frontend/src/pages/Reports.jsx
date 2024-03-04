import React from 'react'; //{Component}
import { Link } from 'react-router-dom';
// import Chart from 'react-apexcharts';
const Reports = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <title>Your Reports</title>
      {/* Montserrat Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      {/* Material Icons */}
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
        rel="stylesheet"
      />
      {/* Custom CSS */}
      <div className="grid-container">
        {/* Header */}
        <header className="header">
          <div className="menu-icon"> {/*onclick = openSidebar*/ }
            <span className="material-icons-outlined">menu</span>
          </div>
          <div className="header-left">
            <span className="material-icons-outlined">search</span>
          </div>
          <div className="header-right">
            {/*error temporary*/}
            <Link to="/Error">
              <span className="material-icons-outlined">notifications</span>
            </Link>
            <Link to="/Error">
              <span className="material-icons-outlined">email</span>
            </Link>
            <Link to="/Error">
              <span className="material-icons-outlined">account_circle</span>
            </Link>
            <Link to="index.html" title="logout">
              <span className="material-icons-outlined">logout</span>
            </Link>
          </div>
        </header>
        {/* End Header */}
        {/* Sidebar */}
        <aside id="sidebar">
          <div className="sidebar-title">
            <div className="sidebar-brand">
              <span className="material-icons-outlined">chat</span> Peer Review
            </div>
            <span className="material-icons-outlined" >{/*onClick={closeSidebar} */}
              close
            </span>
          </div>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <Link to="dashboardIndex.html">
                <span className="material-icons-outlined">dashboard</span> Dashboard
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Groups" target="_blank">
                <span className="material-icons-outlined">category</span> Groups
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Error" target="_blank">
                <span className="material-icons-outlined">groups</span> Request Invite
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Error" target="_blank">
                <span className="material-icons-outlined">add_circle</span> Create Group
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="reportIndex.html" title="View your Reports">
                <span className="material-icons-outlined">poll</span> Reports
              </Link>
            </li>
          </ul>
        </aside>
        {/* End Sidebar */}
        {/* Main */}
        <main className="main-container">
          <div className="main-title">
            <h2>Your Reports</h2>
          </div>
          <div className="charts">
            {/*commented charts are already populated*/}
            <div className="charts-card">
              <h2 className="chart-title">Current Ratings</h2>
              <div id="radar-chart" />
            </div>
            <div className="charts-card">
              <h2 className="chart-title">Your Peer's Average Performance </h2>{" "}
              {/* Your Peer Ratings */}
              <div id="bar-chart" />
            </div>
            <div className="charts-card">
              <h2 className="chart-title">Team Member Ratings of You</h2>{" "}
              {/* Team Member Ratings */}
              <div id="hbar-chart" />
            </div>
            <div className="charts-card">
              <h2 className="chart-title">Your Average Rating History</h2>
              {/* Rating History*/}
              <div id="area-chart" />
            </div>
          </div>
        </main>
        {/* End Main */}
      </div>
      {/* Scripts */}
      {/* ApexCharts */}
      {/* Custom JS */}
    </>
  );
};

export default Reports;

// Placeholder functions openSidebar and closeSidebar are assumed to be defined elsewhere.
