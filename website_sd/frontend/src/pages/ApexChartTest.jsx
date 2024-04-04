import React from "react";
import ApexCharts from "apexcharts";

class ApexChartTest extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.initializeChart();
  }

initializeChart() {
    const options = {
        chart: {
            type: "bar",
            height: window.innerHeight * 0.35,
            foreColor: "#ffffff", // Set the text color to white
        },
        series: [
            {
                name: "Sales",
                data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
            },
        ],
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
            labels: {
                style: {
                    colors: "#ffffff", // Set the label text color to white
                },
            },
        },
        title: {
            text: "Sales Chart",
            align: "center",
            style: {
                color: "#ffffff", // Set the title text color to white
            },
        },
    };

    const chart = new ApexCharts(this.chartRef.current, options);
    chart.render();
}

  render() {
    return <div ref={this.chartRef}></div>;
  }
}

export default ApexChartTest;
