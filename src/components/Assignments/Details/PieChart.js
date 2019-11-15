import React from "react";
import ReactMinimalPieChart from "react-minimal-pie-chart";

const PieChart = () => {
  return (
    <div className="piechart">
      <ReactMinimalPieChart
        animate={false}
        animationDuration={500}
        animationEasing="ease-out"
        cx={50}
        cy={50}
        data={[
          {
            color: "#EEE",
            title: "One",
            value: 50
          },
          {
            color: "#000",
            title: "Two",
            value: 25
          },
          {
            color: "rgb(38,195,34)",
            title: "Three",
            value: 25
          }
        ]}
        label={false}
        labelPosition={50}
        lengthAngle={360}
        lineWidth={20}
        onClick={undefined}
        onMouseOut={undefined}
        onMouseOver={undefined}
        paddingAngle={5}
        radius={50}
        ratio={1}
        rounded={false}
        startAngle={94}
        style={{
          height: "100px"
        }}
      />

      <span className="percentage">50%</span>
    </div>
  );
};

export default PieChart;
