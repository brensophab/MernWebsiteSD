import { React } from "react"; //{Component}
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";
const Reports = () => {
  const lineChartOptions = {
    chart: { id: "basic-line" },
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
      ],
      labels: { style: { colors: "#ffffff" } }, // Add this line
    },
    yaxis: { labels: { style: { colors: "#ffffff" } } }, // Add this line
    stroke: { colors: ["#ffffff"] }, // Add this line
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
      ],
      labels: { style: { colors: "#ffffff" } },
    },
    yaxis: { labels: { style: { colors: "#ffffff" } } }, // Add this line
    stroke: { colors: ["#ffffff"] },
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
            colors: ["#ffffff"], // White text color
          },
        },
      },
    },
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
      ],
      labels: { style: { colors: "#ffffff" } },
    },
    yaxis: { labels: { style: { colors: "#ffffff" } } }, // Add this line
    stroke: { colors: ["#ffffff"] },
    series: [{ name: "series-1", data: [30, 40, 45, 50, 49, 60, 70, 91, 125] }],
  };
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
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <title>Peer Review Dashboard</title>
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
          <div className="menu-icon">
            {" "}
            {/* Now it's clickable */}
            <span className="material-icons-outlined">menu</span>
          </div>
          <div className="header-left">
          </div>
          <div className="header-right">
            {/*error temporary*/}
            {/* <Link to="/Error">
              <span className="material-icons-outlined">notifications</span>
            </Link>
            <Link to="/Error">
              <span className="material-icons-outlined">email</span>
            </Link>
            <Link to="/Error">
              <span className="material-icons-outlined">account_circle</span>
            </Link> */}
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
            <li class="sidebar-list-item">
              <a title="View your Reports" href="/Reports">
                <span class="material-icons-outlined">poll</span> Reports
              </a>
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
