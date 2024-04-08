import { React, useState } from "react"; //{Component}

import { Link } from "react-router-dom";
import Chart from "react-apexcharts";
const Reports = () => {
  const lineChartOptions = {
    chart: { id: "basic-line" },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      labels: { style: { colors: '#ffffff' } } // Add this line
    },
    yaxis: { labels: { style: { colors: '#ffffff' } } }, // Add this line
    stroke: { colors: ['#ffffff'] }, // Add this line
    series: [{ name: "series-1", data: [30, 40, 45, 50, 49, 60, 70, 91, 125] }],
  };

  const barChartOptions = {
    chart: { id: "basic-bar" },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],labels: { style: { colors: '#ffffff' } }
    },
    yaxis: { labels: { style: { colors: '#ffffff' } } }, // Add this line
    stroke: { colors: ['#ffffff'] },
    series: [{ name: "series-1", data: [30, 40, 45, 50, 49, 60, 70, 91, 125] }],
  };

  const pieChartOptions = {
    series: [44, 55, 13, 43, 22],
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    chart: { type: "donut" },
    plotOptions: {
        pie: {
            dataLabels: {
                style: {
                    colors: ['#ffffff'] // White text color
                }
            }
        }
    }
};

  const barChartOptions2 = {
    chart: { id: "basic-bar" },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],labels: { style: { colors: '#ffffff' } }
    },
    yaxis: { labels: { style: { colors: '#ffffff' } } }, // Add this line
    stroke: { colors: ['#ffffff'] },
    series: [{ name: "series-1", data: [30, 40, 45, 50, 49, 60, 70, 91, 125] }],
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
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

      <div className="grid-container">
        {/* Header */}
        <header className="header">
          <div className="menu-icon" onClick={openSidebar}>
            {" "}
            {/* Now it's clickable */}
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
        <aside
          id="sidebar"
          style={{ display: isSidebarOpen ? "block" : "none" }}
        >
          <div className="sidebar-title">
            <div className="sidebar-brand">
              <span className="material-icons-outlined">chat</span> Peer Review
            </div>
            <span className="material-icons-outlined" onClick={closeSidebar}>
              close
            </span>
          </div>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <Link to="/Dashboard">
                <span className="material-icons-outlined">dashboard</span>{" "}
                Dashboard
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Groups" target="_blank">
                <span className="material-icons-outlined">category</span> Groups
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Error" target="_blank">
                <span className="material-icons-outlined">groups</span> Request
                Invite
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Error" target="_blank">
                <span className="material-icons-outlined">add_circle</span>{" "}
                Create Group
              </Link>
            </li>
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
            <h2>Your Reports</h2>
          </div>
          <div className="content">
            <div className="charts-container">
              <div className="chart">
                <h2>Current Ratings</h2>
                <Chart
                  options={lineChartOptions}
                  series={lineChartOptions.series}
                  type="line"
                  width="100%"
                />
              </div>
              <div className="chart">
                <h2>Your Peer's Average Performance</h2>
                <Chart
                  options={barChartOptions}
                  series={barChartOptions.series}
                  type="bar"
                  width="100%"
                />
              </div>
              <div className="chart">
                <h2>Team Member Ratings of You</h2>
                <Chart
                  options={pieChartOptions}
                  series={pieChartOptions.series}
                  type="donut"
                  width="100%"
                />
              </div>
              <div className="chart">
                <h2>Your Average Rating History</h2>
                <Chart
                  options={barChartOptions2}
                  series={barChartOptions2.series}
                  type="bar"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </main>
        {/* End Main */}
      </div>
    </>
  );
};

export default Reports;

// Placeholder functions openSidebar and closeSidebar are assumed to be defined elsewhere.
