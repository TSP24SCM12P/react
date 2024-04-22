import React from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
//const ReactHighcharts = require("highcharts-react");

// Refer the high charts "https://www.highcharts.com/demo/bar-basic" for more information

const LineCharts = (props) => {
  const config = {
    chart: {
      type: "line",
    },
    title: {
      text: props.title,
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -45,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Issues",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "Issues: <b>{point.y} </b>",
    },
    series: [
      {
        name: props.title,
        data: props.data,
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: "#FFFFFF",
          align: "right",
          format: "{point.y}", // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={config}/>
    </div>
  );
};

export default LineCharts;
