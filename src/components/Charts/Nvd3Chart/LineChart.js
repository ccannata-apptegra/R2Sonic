import React from "react";
import NVD3Chart from "react-nvd3";

function getDatum() {
  var eighteen = [],
    nineteen = [],
    twenty = [];
  for (var i = 0; i < 100; i++) {
    eighteen.push({
      x: i,
      y: Math.sin(i / 10)
    });
    nineteen.push({
      x: i,
      y: Math.sin(i / 10) * 0.25 + 0.5
    });
    twenty.push({
      x: i,
      y: 0.5 * Math.cos(i / 10)
    });
  }
  return [
    {
      values: eighteen,
      key: "2018",
      color: "#000D14"
    },
    {
      values: nineteen,
      key: "2019",
      color: "#0065A1"
    },
    {
      values: twenty,
      key: "2020",
      color: "#33B4FF"
    }
  ];
}

class LineChart extends React.Component {
  render() {
    const data = getDatum();
    return (
      <div>
        {React.createElement(NVD3Chart, {
          xAxis: {
            tickFormat: function(d) {
              return d;
            },
            axisLabel: "Month"
          },
          yAxis: {
            axisLabel: "Sales Revenue",
            tickFormat: function(d) {
              return parseFloat(d).toFixed(2);
            }
          },
          type: "lineChart",
          datum: data,
          x: "x",
          y: "y",
          height: 500,
          renderEnd: function() {
            console.log("renderEnd");
          }
        })}
      </div>
    );
  }
}

export default LineChart;
