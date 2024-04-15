import { React } from "react"; //{Component}
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";
const Reports = () => {
  const multiLineChartOptions = {
    chart: {
      height: 350,
      type: "line",
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#FF1654", "#247BA0"],
    series: [
      {
        name: "You",
        data: [4.2, 2.5, 3.2, 5, 4.2, 5, 3.5, 5],
      },
      
      {
        name: "Others",
        data: [3, 3.2, 2.8, 4.5, 4.4, 4.4, 4.0, 4.6]
      }
      
    ],
    stroke: {
      width: [4, 4]
    },
    plotOptions: {
      bar: {
        columnWidth: "20%"
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'], 
      labels: { style: { colors: "#ffffff" } },
    },
    yaxis: [
      {
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#FF1654"
        },
        labels: {
          style: {
            colors: "#FF1654"
          }
        },
        title: {
          text: "Your Rating",
          style: {
            color: "#FF1654"
          }
        }
      },
      {
        opposite: true,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#247BA0"
        },
        labels: {
          style: {
            colors: "#247BA0"
          }
        },
        title: {
          text: "Average Rating of Peers",
          style: {
            color: "#247BA0"
          }
        }
      }
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false
      }
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40
    }
  };

  const barChartOptions = {
    chart: { id: "basic-bar" },
    xaxis: {
      categories: [
        "Member 1",
        "Member 2",
        "Member 3",
        "Member 4"
      ],
      labels: { style: { colors: "#ffffff" } },
    },
    yaxis: { labels: { style: { colors: "#ffffff" } } }, // Add this line
    stroke: { colors: ["#ffffff"] },
    series: [{ name: "series-1", data: [4, 2, 5, 2] }],
  };

  const pieChartOptions = {
    series: [44, 55, 13, 43, 22],
    labels: ["Rating of 1", "Rating of 2", "Rating of 3", "Rating of 4", "Rating of 5"],
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
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
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
      labels: { style: { colors: "#C0C0C0" } },
    },
    yaxis: { labels: { style: { colors: "#C0C0C0" } } }, // Add this line
    stroke: { colors: ["#C0C0C0"] },
    series: [{ name: "series-1", data: [30, 40, 45, 50, 49, 60, 70, 91, 100] }],
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
            <li className="sidebar-list-item">
              <Link to="/Survey" title="Rate your Peers">
                <span className="material-symbols-outlined">ballot</span> Survey
              </Link>
            </li>
          </ul>
        </aside>

        {/* End Sidebar */}
        {/* Main */}
        <main className="main-container">
          <div className="main-title">
            <h2>{username}'s Reports</h2>
          </div>
          <div className="content">
            <div className="charts-container">
              <div className="chart">
                <h2>Your Average Rating vs. Others</h2>
                <Chart
                  options={multiLineChartOptions}
                  series={multiLineChartOptions.series}
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
                <h2>Group's progress</h2>
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
