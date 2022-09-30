import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
} from "victory";
import "./line-chart.css";

const dataSet = [
  { x: 0, y: 0 },
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 7 },
];

const dataSet1 = [
  { x: 0, y: 3 },
  { x: 1, y: 6 },
  { x: 2, y: 9 },
  { x: 3, y: 0 },
  { x: 4, y: 2 },
  { x: 5, y: 4 },
];

// victory theme
// Two types of themes - material,grayscale

//animate object

// properties

// STYLES
// 1. data
// 2. labels

///BASICS

//  1. Victory Chart import
//  2. add dataSet
//  3. line Color and Stroke
//  4. Victory Axis (Y axis)
//  5. X Axis
//6. if we add tick values custom
//7. if we add domain

const LineChart = () => {
  const animateObject = {
    duration: 2000,
    onLoad: { duration: 1000 },
  };
  return (
    <div className="chartInternalWrapper">
      <VictoryChart
        // theme={VictoryTheme.material}
        theme={VictoryTheme.grayscale}
        // width={800}
        // height={600}
        domainPadding={30}
      >
        <VictoryAxis
          crossAxis={true}
          dependentAxis //for y-axis
          offsetX={50}
          label={`Number of Customer`}
          style={{
            axis: { stroke: "#e5e6ea" },
            ticks: { stroke: "transparent", size: 5 },
            grid: { stroke: "#e5e6ea" },
            axisLabel: {
              padding: 25,
              fontSize: 15,
            },
            tickLabels: { fontSize: 13 },
          }}
        />
        <VictoryAxis
          crossAxis={true}
          label={`Number of Days`}
          offsetY={50}
          // domain={[-10, 10]}
          // tickValues={["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]}
          style={{
            axis: { stroke: "#e5e6ea" },
            ticks: { stroke: "#e5e6ea", size: 5 },
            grid: { stroke: "transparent" },

            axisLabel: {
              padding: 30,
              fontSize: 10,
            },
            tickLabels: {
              fontSize: 13,
              padding: 6,
            },
          }}
        />
        <VictoryLine
          style={{
            data: { stroke: "red", strokeWidth: 2 },
            labels: {
              fontSize: 12,
              fill: ({ datum }: any) => (datum?.x < 3 ? "#000000" : "red"),
            },
          }}
          data={dataSet}
          labels={({ datum }) => datum.x}
        />

        {/* <VictoryLine
          style={{
            data: { stroke: "red", strokeWidth: 2 },
            labels: {
              fontSize: 18,
              fill: ({ datum }: any) => (datum?.x < 3 ? "#000000" : "red"),
            },
          }}
          data={dataSet1}
        /> */}
      </VictoryChart>
    </div>
  );
};

export default LineChart;
